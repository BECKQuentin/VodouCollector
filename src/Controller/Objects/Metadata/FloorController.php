<?php

namespace App\Controller\Objects\Metadata;

use App\Entity\Objects\Metadata\Floor;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\Metadata\FloorRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FloorController extends AbstractController
{
    const ROUTE         = 'floor';
    const METADATA_NAME = 'Etage';


    #[Route('/floor', name: 'floor')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addFloor(FloorRepository $floorRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = new Floor();
        $metadataRepository = $floorRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/floor-edit/{id}', name: 'floor_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editFloor(Floor $floor, FloorRepository $floorRepository,Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = $floor;
        $metadataRepository = $floorRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/floor-delete/{id}', name: 'floor_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteFloor(Floor $floor, Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($floor);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$floor->getName().' !');
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
