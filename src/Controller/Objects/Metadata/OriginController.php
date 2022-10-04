<?php

namespace App\Controller\Objects\Metadata;


use App\Entity\Objects\Metadata\Origin;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\OriginRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OriginController extends AbstractController
{
    const ROUTE         = 'origin';
    const METADATA_NAME = 'Origine';


    #[Route('/origin', name: 'origin')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addOrigin(OriginRepository $originRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = new Origin();
        $metadataRepository = $originRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/origin-edit/{id}', name: 'origin_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editOrigin(Origin $origin, OriginRepository $originRepository,Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = $origin;
        $metadataRepository = $originRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/origin-delete/{id}', name: 'origin_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deletePopulation(Origin $origin, Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($origin);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$origin->getName().' !');
        return $this->redirectToRoute(self::ROUTE);
    }

    //////////////* GLOBAL METADATAS (CRU)*///////////////////
    public function viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine)
    {
        $allMetadata = $metadataRepository->findAll();
        $form = $this->createForm(MetaDataFormType::class, $metadata);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $doctrine->getManager();
            $em->persist($metadata);
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
