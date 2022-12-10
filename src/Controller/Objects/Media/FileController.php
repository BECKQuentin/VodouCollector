<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Media\Files;
use App\Entity\Objects\Objects;
use App\Entity\Site\Action;
use App\Form\Objects\MediaFormType;
use App\Repository\Objects\FilesRepository;
use App\Repository\Objects\ObjectsRepository;
use App\Repository\Site\ActionCategoryRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FileController extends AbstractController
{


    #[Route('/objects/{id}/file', name: 'objects_files')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function fileIndex(Objects $objects, Request $request, UploadService $uploadService, FilesRepository $filesRepository, ActionCategoryRepository $actionCategoryRepository, ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(MediaFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $files = $form->get('name')->getData();

            if ($files) {
                foreach ($files as $file) {

                    if($uploadService->isFile($file)) {
                        $fileNameCode = $uploadService->createFileName($file, $objects, $filesRepository);
                        $fileName = $uploadService->upload($file, $objects, $fileNameCode);

                        $fl = new Files();
                        $fl->setName($fileName);
                        $fl->setCode($fileNameCode);
                        $fl->setObjects($objects);
                        $objects->addFile($fl);

                        $action = new Action();
                        $action->setName('Fichier ajouté');
                        $action->setObject($objects);
                        $action->setOthersValue($fl->getName());
                        $action->setCreatedBy($this->getUser());
                        $action->setCategory($actionCategoryRepository->find(2));

                        $em = $doctrine->getManager();
                        $em->persist($objects);
                        $em->persist($action);
                        $em->flush();
                    } else {
                        $this->addFlash('danger', 'Ceci n\'est pas un fichier valide');
                        $this->redirectToRoute('objects_files',
                            ['id' => $objects->getId()],
                        );
                    }
                }
            }
        }

        return $this->render('objects/media/file.html.twig', [
            'object'    => $objects,
            'form'      => $form->createView(),
            'extension' => $objects->getFiles(),
            'bookmarks'      => $this->getUser()->getBookmark(),
        ]);
    }


    #[Route('/file-delete/{id}/{object}', name: 'delete_objects_file')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function fileDelete(Files $files, ActionCategoryRepository $actionCategoryRepository, ObjectsRepository $objectsRepository, Request $request, UploadService $uploadService, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $filesystem = new Filesystem();
//        dd($files->getAbsolutePath());
        $filesystem->remove($files->getAbsolutePath());

        $action = new Action();
        $action->setName('Fichier supprimé');
        $action->setObject($objectsRepository->findOneBy(['id' => $objId]));
        $action->setOthersValue($files->getName());
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(2));

        $em = $doctrine->getManager();
        $em->remove($files);
        $em->persist($action);
        $em->flush();

        return($this->redirectToRoute('objects_files',
            ['id' => $objId],
        ));
    }





}
