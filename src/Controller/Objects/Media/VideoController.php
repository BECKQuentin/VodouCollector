<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Media\Videos;
use App\Entity\Objects\Objects;
use App\Entity\Site\Action;
use App\Form\Objects\MediaFormType;
use App\Repository\Objects\ObjectsRepository;
use App\Repository\Objects\VideosRepository;
use App\Repository\Site\ActionCategoryRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VideoController extends AbstractController
{

    #[Route('/objects/{id}/video', name: 'objects_videos')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function videoIndex(Objects $objects, Request $request, UploadService $uploadService, VideosRepository $videosRepository, ActionCategoryRepository $actionCategoryRepository, ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(MediaFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $videos = $form->get('name')->getData();

            if ($videos) {
                foreach ($videos as $video) {

                    if($uploadService->isVideo($video)) {
                        $fileNameCode = $uploadService->createFileName($video, $objects, $videosRepository);
                        $fileName = $uploadService->upload($video, $objects, $fileNameCode);

                        $vid = new Videos();
                        $vid->setName($fileName);
                        $vid->setCode($fileNameCode);
                        $vid->setObjects($objects);
                        $objects->addVideo($vid);

                        $action = new Action();
                        $action->setName('Video ajouté');
                        $action->setObject($objects);
                        $action->setOthersValue($vid->getName());
                        $action->setCreatedBy($this->getUser());
                        $action->setCategory($actionCategoryRepository->find(2));

                        $em = $doctrine->getManager();
                        $em->persist($objects);
                        $em->persist($action);
                        $em->flush();
                    } else {
                        $this->addFlash('danger', 'Ceci n\'est pas une vidéo valide');
                        $this->redirectToRoute('objects_files',
                        ['id' => $objects->getId()]);
                    }
                }
            }
        }

        return $this->render('objects/media/video.html.twig', [
            'object'    => $objects,
            'form'      => $form->createView(),
        ]);
    }


    #[Route('/video-delete/{id}/{object}', name: 'delete_objects_vid')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membres peuvent faire ça")]
    public function videoDelete(Videos $videos, ActionCategoryRepository $actionCategoryRepository, ObjectsRepository $objectsRepository, Request $request, UploadService $uploadService, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $filesystem = new Filesystem();
        $filesystem->remove($videos->getAbsolutePath());

        $action = new Action();
        $action->setName('Vidéo supprimé');
        $action->setObject($objectsRepository->findOneBy(['id' => $objId]));
        $action->setOthersValue($videos->getName());
        $action->setCreatedBy($this->getUser());
        $action->setCategory($actionCategoryRepository->find(2));

        $em = $doctrine->getManager();
        $em->remove($videos);
        $em->persist($action);
        $em->flush();

        return($this->redirectToRoute('objects_videos',
            ['id' => $objId],
        ));

    }





}
