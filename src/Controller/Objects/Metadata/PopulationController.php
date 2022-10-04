<?php

namespace App\Controller\Objects\Metadata;

use App\Entity\Objects\Metadata\Population;
use App\Entity\Site\Action;
use App\Form\Objects\MetaDataFormType;
use App\Repository\Objects\PopulationRepository;
use App\Repository\Site\ActionCategoryRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PopulationController extends AbstractController
{
    const ROUTE         = 'population';
    const METADATA_NAME = 'Population';


    #[Route('/population', name: 'population')]
    #[IsGranted("ROLE_GUEST", message: "Seules les Invités peuvent faire ça")]
    public function addPopulation(PopulationRepository $populationRepository, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        return $this->viewReturnMetadata(new Population(), $populationRepository, $actionCategoryRepository, $request, $doctrine);
    }


    #[Route('/population-edit/{id}', name: 'population_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editPopulation(Population $population, PopulationRepository $populationRepository, ActionCategoryRepository $actionCategoryRepository, Request $request, ManagerRegistry $doctrine): Response
    {
       return $this->viewReturnMetadata($population, $populationRepository, $actionCategoryRepository, $request, $doctrine);
    }


    #[Route('/population-delete/{id}', name: 'population_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deletePopulation(Population $population, Request $request, ActionCategoryRepository $actionCategoryRepository, ManagerRegistry $doctrine): Response
    {
        $action = new Action();
        $action->setName(self::METADATA_NAME . ' supprimé');
        $action->setOthersValue($population->getName());
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(3));

        $em = $doctrine->getManager();
        $em->remove($population);
        $em->persist($action);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$population->getName().' !');
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
