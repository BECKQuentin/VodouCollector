<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Media\Videos;
use App\Entity\Objects\Media\Youtube;
use App\Entity\Objects\Objects;
use App\Form\Objects\YoutubeLinkFormType;
use App\Repository\YoutubeRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class YoutubeController extends AbstractController
{

    #[Route('/objects/{id}/youtube', name: 'objects_youtube')]
    public function youtubeIndex(Objects $objects, Request $request, YoutubeRepository $youtubeRepository, ManagerRegistry $doctrine): Response
    {
        $youtube = new Youtube();
        $form = $this->createForm(YoutubeLinkFormType::class, $youtube);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

                //extraire code youtube de l'url
                $link   = $form->getData('link');
                $arrLink = explode('/', $link->getLink());
                $url    = end($arrLink);
                $arrUrl = explode('=', $url);
                $code   = end($arrUrl);

                //Flush in BDD
                $em = $doctrine->getManager();
                $youtube->setObjects($objects);
                $youtube->setLink($code);
                $em->persist($youtube);
                $em->flush();

                //vider l'input
                unset($entity);
                unset($form);
                $youtube = new Youtube();
                $form = $this->createForm(YoutubeLinkFormType::class, $youtube);

                return $this->render('objects/media/youtube.html.twig', [
                    'object'    => $objects,
                    'form'      => $form->createView(),
                ]);

        }
        return $this->render('objects/media/youtube.html.twig', [
        'object'    => $objects,
        'form'      => $form->createView(),
        ]);


    }


    #[Route('/youtube-delete/{id}/{object}', name: 'delete_objects_youtube')]
    public function youtubeDelete(Youtube $youtube, Request $request, UploadService $uploadService, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $em = $doctrine->getManager();
        $em->remove($youtube);
        $em->flush();

        return($this->redirectToRoute('objects_youtube',
            ['id' => $objId],
        ));

    }





}
