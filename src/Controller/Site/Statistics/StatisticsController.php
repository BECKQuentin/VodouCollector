<?php

namespace App\Controller\Site\Statistics;

use App\Repository\Objects\CategoriesRepository;
use App\Repository\Objects\FloorRepository;
use App\Repository\Objects\GodsRepository;
use App\Repository\Objects\MaterialsRepository;
use App\Repository\Objects\Metadata\ExpositionLocationRepository;
use App\Repository\Objects\ObjectsRepository;
use App\Repository\Objects\OriginRepository;
use App\Repository\Objects\PopulationRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

class StatisticsController extends AbstractController
{


    #[Route('/statistics', name: 'statistics')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function index(
        ObjectsRepository $objectsRepository,
        CategoriesRepository $categoriesRepository,
        GodsRepository $godsRepository,
        OriginRepository $originRepository,
        PopulationRepository $populationRepository,
        MaterialsRepository $materialsRepository,
        ExpositionLocationRepository $expositionLocationRepository,
        FloorRepository $floorRepository,
    ): Response
    {
        $objects = $objectsRepository->findAll();
        $categories = $categoriesRepository->findAll();
        $gods = $godsRepository->findAll();
        $materials = $materialsRepository->findAll();
        $origins = $originRepository->findAll();
        $populations = $populationRepository->findAll();
        $floors = $floorRepository->findAll();

        //Categories
        $arrDatasCategories = [];
        $arrLabelsCategories = [];
        foreach ($categories as $categorie) {
            $arrDatasCategories[] = count($categorie->getObjects());
        }
        foreach ($categories as $categorie) {
            $arrLabelsCategories[] = $categorie->getName().' - '.count($categorie->getObjects());
        }

        //Divinitès
        $arrDatasGods = [];
        $arrLabelsGods = [];
        foreach ($gods as $god) {
            $arrDatasGods[] = count($god->getObjects());
        }
        foreach ($gods as $god) {
            $arrLabelsGods[] = $god->getName().' - '.count($god->getObjects());
        }

        //Origine
        $arrDatasOrigins = [];
        $arrLabelsOrigins = [];
        foreach ($origins as $origin) {
            $arrDatasOrigins[] = count($origin->getObjects());
        }
        foreach ($origins as $origin) {
            $arrLabelsOrigins[] = $origin->getName().' - '.count($origin->getObjects());
        }

        //Population
        $arrDatasPopulations = [];
        $arrLabelsPopulations = [];
        foreach ($populations as $population) {
            $arrDatasPopulations[] = count($population->getObjects());
        }
        foreach ($populations as $population) {
            $arrLabelsPopulations[] = $population->getName().' - '.count($population->getObjects());
        }

        //Matériaux
        $arrDatasMaterials = [];
        $arrLabelsMaterials = [];
        foreach ($materials as $material) {
            $arrDatasMaterials[] = count($material->getObjects());
        }
        foreach ($materials as $material) {
            $arrLabelsMaterials[] = $material->getName().' - '.count($material->getObjects());
        }

        //Exposition
        $arrDatasLocationsToCount = [];
        $arrLabelsLocations = [];
        foreach ($objects as $object) {
            if ($object->getLocation() != null) {
                $arrDatasLocationsToCount[] = $object->getLocation()->getId();
                $arrDatasLocations = array_count_values($arrDatasLocationsToCount);
            }
        }
        foreach ($arrDatasLocations as $key => $location) {
            $arrLabelsLocations[] = $expositionLocationRepository->find($key)->getNameFR().' - '. $location;
        }

        //Etages
        $arrDatasFloors = [];
        $arrLabelsFloors = [];
        foreach ($floors as $floor) {
            $arrDatasFloors[] = count($floor->getObjects());
        }
        foreach ($floors as $floor) {
            $arrLabelsFloors[] = $floor->getName().' - '.count($floor->getObjects());
        }


        return $this->render('site/statistics/statistics.html.twig', [
            'arrDatasCategories' => $arrDatasCategories,
            'arrLabelsCategories' => $arrLabelsCategories,

            'arrDatasGods' => $arrDatasGods,
            'arrLabelsGods' => $arrLabelsGods,

            'arrDatasOrigins' => $arrDatasOrigins,
            'arrLabelsOrigins' => $arrLabelsOrigins,

            'arrDatasPopulations' => $arrDatasPopulations,
            'arrLabelsPopulations' => $arrLabelsPopulations,

            'arrDatasMaterials' => $arrDatasMaterials,
            'arrLabelsMaterials' => $arrLabelsMaterials,

            'arrDatasLocations' => $arrDatasLocations,
            'arrLabelsLocations' => $arrLabelsLocations,

            'arrDatasFloors' => $arrDatasFloors,
            'arrLabelsFloors' => $arrLabelsFloors,
        ]);
    }

//    #[Route('/statistics.svg', name: 'statistics_svg')]
//    public function statisticsSVG(ObjectsRepository $objectsRepository): Response
//    {
//        $objects = $objectsRepository->findAll();
//
//
//        return $this->render('site/statistics/statistics.html.twig', [
//            [ 'data' => $objects->get() ],
//            new Response('', 200, ['Content-Type' => 'image/svg+xml'])
//        ]);
//    }


}
