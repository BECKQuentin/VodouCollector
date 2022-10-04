<?php

namespace App\Controller\Objects\Metadata;

use App\Entity\Objects\Metadata\Gods;
use App\Entity\Site\Action;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\GodsRepository;
use App\Repository\Site\ActionCategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GodsController extends AbstractController
{
    const ROUTE         = 'gods';
    const METADATA_NAME = 'Dieux';


    #[Route('/gods', name: 'gods')]
    #[IsGranted("ROLE_GUEST", message: "Seules les Invités peuvent faire ça")]
    public function addGods(GodsRepository $godsRepository, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        return $this->viewReturnMetadata(new Gods(), $godsRepository, $actionCategoryRepository, $request, $doctrine);
    }


    #[Route('/gods-edit/{id}', name: 'gods_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editGods(Gods $gods, GodsRepository $godsRepository, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        return $this->viewReturnMetadata($gods, $godsRepository, $actionCategoryRepository, $request, $doctrine);
    }


    #[Route('/gods-delete/{id}', name: 'gods_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteGods(Gods $gods, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {

        $action = new Action();
        $action->setName(self::METADATA_NAME . ' supprimé');
        $action->setOthersValue($gods->getName());
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(3));

        $em = $doctrine->getManager();
        $em->remove($gods);
        $em->persist($action);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$gods->getName().' !');
        return $this->redirectToRoute(self::ROUTE);
    }

    //////////////* GLOBAL METADATAS (CRU)*///////////////////
    public function viewReturnMetadata($metadata, $metadataRepository, $actionCategoryRepository, $request, $doctrine)
    {
        $allMetadata = $metadataRepository->findAll();
        $form = $this->createForm(MetaDataFormType::class, $metadata);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $action = new Action();
            $action->setName(self::METADATA_NAME . ' ajout/modif');
            $action->setOthersValue($metadata->getName());
            $action->setCreatedBy($this->getUser());
            $action->setCategory($actionCategoryRepository->find(3));

            $em = $doctrine->getManager();
            $em->persist($metadata);
            $em->persist($action);
            $em->flush();

            $this->addFlash('success', "L'article a bien été ajoutée");
            return $this->redirectToRoute(self::ROUTE);
        }

        return $this->render('objects/metadata/metadata.html.twig', [
            'editRoute'     => self::ROUTE.'_edit',
            'deleteRoute'   => self::ROUTE.'_delete',
            'className'     => self::METADATA_NAME,
            'items'         => $allMetadata,
            'form'          => $form->createView(),
        ]);
    }
}
