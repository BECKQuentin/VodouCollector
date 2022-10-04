<?php

namespace App\Controller\Objects\Metadata;

use App\Entity\Objects\Metadata\MuseumCatalogue;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\Metadata\MuseumCatalogueRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MuseumCatalogueController extends AbstractController
{
    const ROUTE         = 'museumCatalogue';
    const METADATA_NAME = 'Catalogues du Musée';


    #[Route('/museumCatalogue', name: 'museumCatalogue')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addMuseumCatalogue(MuseumCatalogueRepository $museumCatalogueRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = new MuseumCatalogue();
        $metadataRepository = $museumCatalogueRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/museumCatalogue-edit/{id}', name: 'museumCatalogue_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editMuseumCatalogue(MuseumCatalogue $museumCatalogue, MuseumCatalogueRepository $museumCatalogueRepository,Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = $museumCatalogue;
        $metadataRepository = $museumCatalogueRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/museumCatalogue-delete/{id}', name: 'museumCatalogue_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteMuseumCatalogue(MuseumCatalogue $museumCatalogue, Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($museumCatalogue);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$museumCatalogue->getName().' !');
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
