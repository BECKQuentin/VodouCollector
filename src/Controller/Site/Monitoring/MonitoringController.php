<?php

namespace App\Controller\Site\Monitoring;

use App\Form\Site\SiteParameterFormType;
use App\Repository\Site\ActionRepository;
use App\Repository\Site\SiteParameterRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MonitoringController extends AbstractController
{


    #[Route('/action-log', name: 'action_log')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les Admins peuvent faire ça")]
    public function actionLog(ActionRepository $actionRepository, SiteParameterRepository $siteParameterRepository, ManagerRegistry $doctrine): Response
    {


        //suppression des anciennes actions
        $actions = $actionRepository->findBy([], ['createdAt' => 'DESC']);
        $site = $siteParameterRepository->find(1);
        if (count($actions) > $site->getLimitActionLog()) {
            foreach (array_slice($actions, $site->getLimitActionLog()) as $actionToRemove) {
                $em = $doctrine->getManager();
                $em->remove($actionToRemove);
                $em->flush();
            }
        }

        return $this->render('site/monitoring/action_log.html.twig', [
            'actions' => $actions,
        ]);
    }

    #[Route('/site-parameter', name: 'site_parameter')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les Admins peuvent faire ça")]
    public function siteParameter(SiteParameterRepository $siteParameterRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $site = $siteParameterRepository->find(1);
        $form = $this->createForm(SiteParameterFormType::class, $site);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $doctrine->getManager();
            $em->persist($site);
            $em->flush();
        }

        return $this->render('site/monitoring/site_parameter.html.twig', [
            'form' => $form->createView(),
        ]);
    }


}
