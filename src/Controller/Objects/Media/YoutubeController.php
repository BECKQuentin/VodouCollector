<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Media\Videos;
use App\Entity\Objects\Media\Youtube;
use App\Entity\Objects\Objects;
use App\Entity\Site\Action;
use App\Form\Objects\YoutubeLinkFormType;
use App\Repository\Objects\ObjectsRepository;
use App\Repository\Site\ActionCategoryRepository;
use App\Repository\YoutubeRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class YoutubeController extends AbstractController
{

    #[Route('/objects/{id}/youtube', name: 'objects_youtube')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function youtubeIndex(Objects $objects, Request $request, YoutubeRepository $youtubeRepository, ActionCategoryRepository $actionCategoryRepository, ManagerRegistry $doctrine): Response
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
                $youtube->setObjects($objects);
                $youtube->setLink($code);

                $action = new Action();
                $action->setName('Video youtube ajouté');
                $action->setObject($objects);
                $action->setCreatedBy($this->getUser());
                $action->setCategory($actionCategoryRepository->find(2));

                $em = $doctrine->getManager();
                $em->persist($youtube);
                $em->persist($action);
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
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function youtubeDelete(Youtube $youtube, Request $request, UploadService $uploadService, ActionCategoryRepository $actionCategoryRepository, ObjectsRepository $objectsRepository, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $action = new Action();
        $action->setName('Video youtube supprimé');
        $action->setObject($objectsRepository->findOneBy(['id' => $objId]));
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(2));

        $em = $doctrine->getManager();
        $em->remove($youtube);
        $em->persist($action);
        $em->flush();

        return($this->redirectToRoute('objects_youtube',
            ['id' => $objId],
        ));

    }





}
