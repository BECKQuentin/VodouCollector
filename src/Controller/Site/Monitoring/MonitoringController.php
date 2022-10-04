<?php

namespace App\Controller\Site\Monitoring;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MonitoringController extends AbstractController
{


    #[Route('/monitoring', name: 'monitoring')]
    public function index(): Response
    {

        return $this->render('site/monitoring/monitoring.html.twig', [
        ]);
    }


}
