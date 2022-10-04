<?php

namespace App\Controller\Objects\Metadata;

use App\Entity\Objects\Metadata\SubCategories;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\SubCategoriesRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SubCategoriesController extends AbstractController
{
    const ROUTE         = 'subCategories';
    const METADATA_NAME = 'Sous-Categories';


    #[Route('/subCategories', name: 'subCategories')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addSubCategories(SubCategoriesRepository $subCategoriesRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = new SubCategories();
        $metadataRepository = $subCategoriesRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }


    #[Route('/subCategories-edit/{id}', name: 'subCategories_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editCategories(SubCategories $subCategories, SubCategoriesRepository $subCategoriesRepository,Request $request, ManagerRegistry $doctrine): Response
    {
        $metadata = $subCategories;
        $metadataRepository = $subCategoriesRepository;

        return $this->viewReturnMetadata($metadata, $metadataRepository, $request, $doctrine);
    }

    /**
     * @Route("/subCategories-delete/{id}", name="subCategories_delete")
     * @IsGranted("ROLE_ADMIN", message="Seules les ADMINS peuvent faire ça")
     */
    #[Route('/floor', name: 'floor')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteSubCategories(SubCategories $subCategories, Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($subCategories);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$subCategories->getName().' !');
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
