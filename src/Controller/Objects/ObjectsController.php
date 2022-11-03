<?php

namespace App\Controller\Objects;

use App\Data\SearchData;
use App\Entity\Objects\Objects;
use App\Entity\Site\Action;
use App\Entity\Site\ActionCategory;
use App\Form\Objects\ObjectsFormType;
use App\Form\SearchFieldType;
use App\Repository\Objects\ObjectsRepository;
use App\Repository\Site\ActionCategoryRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;
use Dompdf\Dompdf;
use Dompdf\Options;
use Knp\Component\Pager\PaginatorInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ObjectsController extends AbstractController
{

    #[Route('/objects', name: 'objects')]
    public function listingObjects(ObjectsRepository $objectsRepository, PaginatorInterface $paginator, SessionInterface $session, Request $request): Response
    {
        $data = new SearchData();
        $data->page = $request->get('page', 1);

        $searchForm = $this->createForm(SearchFieldType::class, $data);
        if (!$this->container->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $searchForm->remove('updatedBy');
        }
        $searchForm->handleRequest($request);
        $searchObjects = $objectsRepository->searchObjects($data);

        //array des ID de la recherche
        $arrIdSearchObj = [];
        foreach ($searchObjects as $objId) {
            $arrIdSearchObj[] = $objId->getId();
        }
        $idsSearchObjs = implode(',', $arrIdSearchObj);
        if ($idsSearchObjs === '') {
            $idsSearchObjs = 'null';
        }

        //Pagination
        $objPaginate = $paginator->paginate(
            $searchObjects,
            $data->page = $request->get('page', 1),
            10
        );

        return $this->render('objects/objects/listing.html.twig', [
            'bookmarks'      => $this->getUser()->getBookmark(),
            'objects'       => $objPaginate,
            'searchForm'    => $searchForm->createView(),
            'totalItemsCount' => count($searchObjects),
            'idsSearchObjs' => $idsSearchObjs,
        ]);
    }


    #[Route('/objects-add', name: 'objects_add')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addObjects(ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine, ValidatorInterface $validator): Response
    {
        $objects = new Objects();
        $form = $this->createForm(ObjectsFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $action = new Action();
            $action->setName('Objet crée');
            $action->setObject($objects);
            $action->setCreatedBy($this->getUser());
            $action->setCategory($actionCategoryRepository->find(2));

            $em = $doctrine->getManager();
            $em->persist($action);
            $em->persist($objects);
            $em->flush();

            $this->addFlash('success', "L'article a bien été ajoutée");
            return $this->redirectToRoute('objects');
        }

        return $this->render('objects/objects/add.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/objects/{id}', name: 'objects_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editObjects(Objects $objects, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {

        $user = $this->getUser();

        $form = $this->createForm(ObjectsFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $objects->setUpdatedAt(new \DateTimeImmutable('now'));
            $objects->setUpdatedBy($user);

            $action = new Action();
            $action->setName('Objet modifié');
            $action->setObject($objects);
            $action->setCreatedBy($user);
            $action->setCategory($actionCategoryRepository->find(2));

            $em = $doctrine->getManager();
            $em->persist($objects);
            $em->persist($action);
            $em->flush();

            $this->addFlash('success', "Les modifications ont bien été sauvegardées !");
        }

        return $this->render('objects/objects/edit.html.twig', [
            'object'    => $objects,
            'form'      => $form->createView(),
        ]);
    }


    #[Route('/objects-delete/{id}', name: 'objects_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deletObjects(Objects $objects, ActionCategoryRepository $actionCategoryRepository,  ManagerRegistry $doctrine): Response
    {
        $action = new Action();
        $action->setName('Objet supprimé');
        $action->setOthersValue($objects->getCode() . ' - ' . $objects->getTitle());
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(2));

        $em = $doctrine->getManager();
        $em->remove($objects);
        $em->persist($action);
        $em->flush();

        $this->addFlash('success', 'Vous avez supprimé '.$objects->getTitle().' !');
        return $this->redirectToRoute('objects');
    }


    #[Route('/objects-view/{id}', name: 'objects_view')]
    public function viewObjects(Objects $object, ManagerRegistry $doctrine): Response
    {
        return $this->render('objects/objects/view.html.twig', [
            'object'    => $object,
        ]);
    }

    /*Extraction de PDF*/
    #[Route('/objects-pdf/{id}', name: 'object_pdf')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les ADMINS peuvent faire ça")]
    public function pdfObjects(Objects $object, ManagerRegistry $doctrine): Response
    {
        // Configure Dompdf according to your needs
        $pdfOptions = new Options();
        $pdfOptions->set('defaultFont', 'Arial');



        // Instantiate Dompdf with our options
        $dompdf = new Dompdf($pdfOptions);

        $dompdf->setOptions($pdfOptions->setIsRemoteEnabled(true));

        // Retrieve the HTML generated in our twig file
        $html = $this->renderView('objects/objects/others/object_pdf.html.twig', [
            'object' => $object,
        ]);

        // Load HTML to Dompdf
        $dompdf->loadHtml($html);

        // (Optional) Setup the paper size and orientation 'portrait' or 'portrait'
        $dompdf->setPaper('A4', 'portrait');

        // Render the HTML as PDF
        $dompdf->render();



        // Output the generated PDF to Browser (force download)
        $dompdf->stream($object->getCode() . '-' . $object->getTitle().".pdf", [
            "Attachment" => true
        ]);
        return new Response();
    }


    #[Route('/objects-extract-csv/{idsSearchObjs}', name: 'objects_extract_csv', requirements: ['name' => '.+'])]
    #[IsGranted("ROLE_MEMBER", message: "Seules les ADMINS peuvent faire ça")]
    public function extractObjectsCSV($idsSearchObjs, ObjectsRepository $objectsRepository, Request $request): Response
    {
        if ($idsSearchObjs !== 'null') {
            $arrIdSearchObj = explode(',', $idsSearchObjs);
        } else {
            $this->addFlash('danger', 'Aucun objet dans votre recherche (extraction impossible)');
            return $this->redirectToRoute('objects');
        }

        $arrSearchObjs = [];
        foreach ($arrIdSearchObj as $idObj) {
            $arrSearchObjs[] = $objectsRepository->find($idObj);
        }

        $headersCSV = array('QUANTITE', 'CODE', 'TITRE', 'CATEGORIES', 'SOUS-CATEGORIES', 'DIVINITES', 'DIVINITES ASSOCIES', 'DESCRIPTION');
        $rows[] = implode(';', $headersCSV);

        foreach ($arrSearchObjs as $obj) {

            $description = '';
            $categories = '';
            $gods = '';
            $subCategories = '';
            $relatedGods = [];

            if ($obj->getDescription() != null ) $description = $obj->getDescription();
            if ($obj->getCategories() != null ) $categories = $obj->getCategories()->getName();
            if ($obj->getSubCategories() != null ) $subCategories = $obj->getSubCategories()->getName();
            if ($obj->getGods() != null ) $gods = $obj->getGods()->getName();
            if ($obj->getRelatedGods() != null ) {
                $arrRelatedGods = $obj->getRelatedGods();
                foreach ($arrRelatedGods as $god) {
                    $relatedGods[] = $god->getName();
                }
                $relatedGods = implode(',', $relatedGods);
            }

            $data = array(
                $obj->getQuantity(),
                $obj->getCode(),
                $obj->getTitle(),
                $categories,
                $subCategories,
                $gods,
                $relatedGods,
                $description
            );
            $rows[] = implode(';', $data);
        }

        $content = implode("\n", $rows);
        $response = new Response($content);

        $filename = count($arrIdSearchObj) . ' - Objets';
        $dispositionHeader = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            $filename . '.csv'
        );
        $response->headers->set('Content-Type', 'text/csv');
        $response->headers->set('Content-Disposition', $dispositionHeader);


        return $response;
    }


    #[Route('/objects-extract-xls/{idsSearchObjs}', name: 'objects_extract_xls', requirements: ['name' => '.+'])]
    #[IsGranted("ROLE_MEMBER", message: "Seules les ADMINS peuvent faire ça")]
    public function extractObjectsXLS($idsSearchObjs, ObjectsRepository $objectsRepository, Request $request): Response
    {

        //vérification de la recherche
        if ($idsSearchObjs !== 'null') {
            $arrIdSearchObj = explode(',', $idsSearchObjs);
        } else {
            $this->addFlash('danger', 'Aucun objet dans votre recherche (extraction impossible)');
            return $this->redirectToRoute('objects');
        }

        $arrSearchObjs = [];
        foreach ($arrIdSearchObj as $idObj) {
            $arrSearchObjs[] = $objectsRepository->find($idObj);
        }

        //création du fichier excel
        $spreadsheet = new Spreadsheet();

        $sheet = $spreadsheet->getActiveSheet();
        $sheet->setTitle(count($arrIdSearchObj) . ' - Objets');
        $sheet->setCellValue('A1', 'QTÉ');
        $sheet->getColumnDimension('A')->setWidth(5);
        $sheet->setCellValue('B1', 'CODE');
        $sheet->getColumnDimension('B')->setAutoSize(true);
        $sheet->setCellValue('C1', 'TITRE');
        $sheet->getColumnDimension('C')->setAutoSize(true);
        $sheet->setCellValue('D1', 'CATEGORIES');
        $sheet->getColumnDimension('D')->setAutoSize(true);
        $sheet->setCellValue('E1', 'SOUS-CATEGORIES');
        $sheet->getColumnDimension('E')->setAutoSize(true);
        $sheet->setCellValue('F1', 'DIVINITES');
        $sheet->getColumnDimension('F')->setAutoSize(true);
        $sheet->setCellValue('G1', 'DIVINITES ASSOCIES');
        $sheet->getColumnDimension('G')->setWidth(11);
        $sheet->setCellValue('H1', 'POPULATION');
        $sheet->getColumnDimension('H')->setAutoSize(true);
        $sheet->setCellValue('I1', 'ORIGINE');
        $sheet->getColumnDimension('I')->setAutoSize(true);
        $sheet->setCellValue('J1', 'DESCRIPTION');
        $sheet->getColumnDimension('J')->setWidth(30);
        $sheet->setCellValue('K1', 'MODE ACQUIS.');
        $sheet->getColumnDimension('K')->setAutoSize(true);
        $sheet->setCellValue('L1', 'DATE ACQUIS.');
        $sheet->getColumnDimension('L')->setAutoSize(true);
        $sheet->setCellValue('M1', 'DATATION');
        $sheet->getColumnDimension('M')->setAutoSize(true);
        $sheet->setCellValue('N1', 'MATERIAUX');
        $sheet->getColumnDimension('N')->setWidth(20);
        $sheet->setCellValue('O1', 'POIDS');
        $sheet->getColumnDimension('O')->setAutoSize(true);
        $sheet->setCellValue('P1', 'HAUTEUR');
        $sheet->getColumnDimension('P')->setAutoSize(true);
        $sheet->setCellValue('Q1', 'LONGUEUR');
        $sheet->getColumnDimension('Q')->setAutoSize(true);
        $sheet->setCellValue('R1', 'PROFONDEUR');
        $sheet->getColumnDimension('R')->setAutoSize(true);
        $sheet->setCellValue('S1', 'REMARQUE ETAT');
        $sheet->getColumnDimension('S')->setWidth(20);
        $sheet->setCellValue('T1', 'ETAT');
        $sheet->getColumnDimension('T')->setAutoSize(true);
        $sheet->setCellValue('U1', 'AVEC SOCLE');
        $sheet->getColumnDimension('U')->setAutoSize(true);
        $sheet->setCellValue('V1', 'CATALOGUE');
        $sheet->getColumnDimension('V')->setWidth(50);
        $sheet->getStyle('V')->getAlignment()->setHorizontal('fill');



//        $sheet->setCellValue('W1', 'EST EXPOSÉ TEMPORAIRE');
//        $sheet->getColumnDimension('W')->setAutoSize(true);
//        $sheet->setCellValue('X1', 'EST EXPOSÉ PERMANENT');
//        $sheet->getColumnDimension('X')->setAutoSize(true);


        $sheet->setCellValue('Y1', 'LOCATION');
        $sheet->getColumnDimension('Y')->setAutoSize(true);
        $sheet->setCellValue('Z1', 'ETAGE');
        $sheet->getColumnDimension('Z')->setAutoSize(true);
        $sheet->setCellValue('AA1', 'N° VITRINE');
        $sheet->getColumnDimension('AA')->setAutoSize(true);
        $sheet->setCellValue('AB1', 'ETAGERE');
        $sheet->getColumnDimension('AB')->setAutoSize(true);



        foreach ($arrSearchObjs as $key => $obj) {

            $key += 2;
            $categories = '';
            $subCategories = '';
            $gods = '';
            $relatedGods = [];
            $description = '';
            $population = '';
            $origin = '';
            $historicDetail = '';
            $historicDate = '';
            $era = '';
            $materials = [];
            $weight = '';
            $sizeHigh = '';
            $sizeLength = '';
            $sizeDepth = '';
            $stateCommentary = '';
            $state = '';
            $isBasemented = '';
            $museumCatalogues = [];

            $location = '';
            $floor = '';
            $showcaseCode = '';
            $shelf = '';


            //Vérifiaction des données existantes
            if ($obj->getCategories() != null ) $categories = $obj->getCategories()->getName();
            if ($obj->getSubCategories() != null ) $subCategories = $obj->getSubCategories()->getName();
            if ($obj->getGods() != null ) $gods = $obj->getGods()->getName();
            if ($obj->getRelatedGods() != null ) {
                $arrRelatedGods = $obj->getRelatedGods();
                foreach ($arrRelatedGods as $god) {
                    $relatedGods[] = $god->getName();
                }
                $relatedGods = implode(',', $relatedGods);
            }
            if ($obj->getPopulation() != null ) $population = $obj->getPopulation();
            if ($obj->getOrigin() != null ) $origin = $obj->getOrigin();
            if ($obj->getDescription() != null ) $description = $obj->getDescription();
            if ($obj->getHistoricDetail() != null ) $historicDetail = $obj->getHistoricDetail();
            if ($obj->getHistoricDate() != null ) $historicDate = $obj->getHistoricDate()->format('d/m/y');
            if ($obj->getEra() != null ) $era = $obj->getEra();
            if ($obj->getMaterials() != null ) {
                $arrMaterials = $obj->getMaterials();
                foreach ($arrMaterials as $material) {
                    $materials[] = $material->getName();
                }
                $materials = implode(',', $materials);
            }
            if ($obj->getWeight() != null ) $weight = $obj->getWeight();
            if ($obj->getSizeHigh() != null ) $sizeHigh = $obj->getSizeHigh();
            if ($obj->getSizeLength() != null ) $sizeLength = $obj->getSizeLength();
            if ($obj->getSizeDepth() != null ) $sizeDepth = $obj->getSizeDepth();
            if ($obj->getStateCommentary() != null ) $stateCommentary = $obj->getStateCommentary();
            if ($obj->getState() != null ) $state = $obj->getState();
            if ($obj->getIsBasemented() != null ) $isBasemented = $obj->getIsBasemented();

            if ($obj->getMuseumCatalogue() != null ) {
                $arrMuseumCatalogue = $obj->getMuseumCatalogue();
                foreach ($arrMuseumCatalogue as $museumCatalogue) {
                    $museumCatalogues[] = $museumCatalogue->getName();
                }
                $museumCatalogues = implode(',', $museumCatalogues);
            }



            if ($obj->getLocation() != null ) $location = $obj->getLocation()->getNameFR();
            if ($obj->getFloor() != null ) $floor = $obj->getFloor()->getName();
            if ($obj->getShowcaseCode() != null ) $showcaseCode = $obj->getShowcaseCode();
            if ($obj->getShelf() != null ) $shelf = $obj->getShelf();



            //Application des données dans les cellules
            $sheet->setCellValue('A'.$key, $obj->getQuantity());
            $sheet->setCellValue('B'.$key, $obj->getCode());
            $sheet->setCellValue('C'.$key, $obj->getTitle());
            $sheet->setCellValue('D'.$key, $categories);
            $sheet->setCellValue('E'.$key, $subCategories);
            $sheet->setCellValue('F'.$key, $gods);
            $sheet->setCellValue('G'.$key, $relatedGods);
            $sheet->setCellValue('H'.$key, $population);
            $sheet->setCellValue('I'.$key, $origin);
            $sheet->setCellValue('J'.$key, $description);
            $sheet->setCellValue('K'.$key, $historicDetail);
            $sheet->setCellValue('L'.$key, $historicDate);
            $sheet->setCellValue('M'.$key, $era);
            $sheet->setCellValue('N'.$key, $materials);
            $sheet->setCellValue('O'.$key, $weight);
            $sheet->setCellValue('P'.$key, $sizeHigh);
            $sheet->setCellValue('Q'.$key, $sizeLength);
            $sheet->setCellValue('R'.$key, $sizeDepth);
            $sheet->setCellValue('S'.$key, $stateCommentary);
            $sheet->setCellValue('T'.$key, $state);
            $sheet->setCellValue('U'.$key, $isBasemented);
            $sheet->setCellValue('V'.$key, $museumCatalogues);

//            $sheet->setCellValue('W'.$key, $isExposedTemp);
//            $sheet->setCellValue('X'.$key, $isExposedPerm);
//            $sheet->setCellValue('Y'.$key, $isExposedStock);

            $sheet->setCellValue('Y'.$key, $location);
            $sheet->setCellValue('Z'.$key, $floor);
            $sheet->setCellValue('AA'.$key, $showcaseCode);
            $sheet->setCellValue('AB'.$key, $shelf);
        }



        $writer = new Xlsx($spreadsheet);

        // Create a Temporary file in the system
        $fileName = count($arrIdSearchObj) . ' - Objets.xlsx';
        $temp_file = tempnam(sys_get_temp_dir(), $fileName);

        // Create the excel file in the tmp directory of the system
        $writer->save($temp_file);

        // Return the excel file as an attachment
        return $this->file($temp_file, $fileName, ResponseHeaderBag::DISPOSITION_INLINE);

    }
}
