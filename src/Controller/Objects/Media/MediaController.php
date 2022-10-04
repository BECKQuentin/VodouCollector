<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Metadata\Images;
use App\Entity\Objects\Objects;
use App\Form\Objects\MediaFormType;
use App\Repository\Objects\ImagesRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MediaController extends AbstractController
{


    #[Route('/objects/{id}/media', name: 'objects_medias')]
    public function mediaIndex(Objects $objects, Request $request, UploadService $uploadService, ImagesRepository $imagesRepository, ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(MediaFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $images = $form->get('name')->getData();

            if ($images) {
                foreach ($images as $image) {

                    if($uploadService->isImage($image)) {
                        $fileNameCode = $uploadService->createFileName($image, $objects, $imagesRepository);
                        $fileName = $uploadService->upload($image, $objects, $fileNameCode);

                        $img = new Images();
                        $img->setName($fileName);
                        $img->setCode($fileNameCode);
                        $img->setObjects($objects);
                        $objects->addImage($img);

                        $em = $doctrine->getManager();
                        $em->persist($objects);
                        $em->flush();
                    } else {
                        $this->addFlash('danger', 'Ceci n\'est pas une image valide');
                        $this->redirectToRoute('objects_medias',
                        ['id' => $objects->getId()]);
                    }
                }
            }
        }

        return $this->render('objects/media/media.html.twig', [
            'object' => $objects,
            'form'   => $form->createView(),
        ]);
    }


    #[Route('/media-delete/{id}/{object}', name: 'delete_objects_img')]
    public function mediaDelete(Images $images, Request $request, UploadService $uploadService, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $filesystem = new Filesystem();
        $filesystem->remove($images->getAbsolutePath());

        $em = $doctrine->getManager();
        $em->remove($images);
        $em->flush();

        return($this->redirectToRoute('objects_medias',
            ['id' => $objId],
        ));

    }

//    /**
//     * @Route("/media-delete-all/{id}", name="delete_objects_all_img")
//     *
//     */
//    public function mediaDeleteAll(Objects $object, Request $request) {
//
//
//        $em = $this->getDoctrine()->getManager();
//        if($object->getImages()) {
//            foreach ($object->getImages() as $img) {
//                $em->remove($img);
//
//            }
//        }
//        $em->flush();
//
//        return($this->redirectToRoute('objects_medias',
//            ['id' => $object->getId()]
//        ));
//    }

}
