<?php

namespace App\Controller;

use App\Data\SearchData;
use App\Form\SearchFieldType;
use App\Repository\Objects\ObjectsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BaseController extends AbstractController
{


    #[Route('/', name: 'home')]
    public function home(ObjectsRepository $objectsRepository): Response
    {
        $countObjects = $objectsRepository->countObjects();
        $countIsRent = $objectsRepository->countWhereIsLocated(1);
        $countIsExposedTempObjects = $objectsRepository->countWhereIsLocated(2);
        $countIsExposedPermObjects = $objectsRepository->countWhereIsLocated(3);
        $countIsExposedStock = $objectsRepository->countWhereIsLocated(4);
        $countToFix = $objectsRepository->countToFix();

        return $this->render('home/home.html.twig', [
            'countObjects' => $countObjects,
            'countIsRent' => $countIsRent,
            'countIsExposedTempObjects' => $countIsExposedTempObjects,
            'countIsExposedPermObjects' => $countIsExposedPermObjects,
            'countIsExposedStock' => $countIsExposedStock,
            'countToFix' => $countToFix,
        ]);
    }


    public function header($routeName, ObjectsRepository $objectsRepository, Request $request)
    {
        return $this->render('base/header.html.twig', [
            'route_name' => $routeName,
        ]);
    }


    #[Route('/redirect-user', name: 'redirect_user')]
    public function redirectUser()
    {

        if ($this->isGranted('ROLE_ADMIN')) {
            return $this->redirectToRoute('home');
        }
        elseif ($this->isGranted('ROLE_MEMBER')) {
            return $this->redirectToRoute('home');
        }
        else {
            return $this->redirectToRoute('login');
        }
    }

}
