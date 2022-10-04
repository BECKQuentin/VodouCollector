<?php

namespace App\Controller\Objects\Media;

use App\Entity\Objects\Media\Files;
use App\Entity\Objects\Objects;
use App\Form\Objects\MediaFormType;
use App\Repository\Objects\FilesRepository;
use App\Service\UploadService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FileController extends AbstractController
{


    #[Route('/objects/{id}/file', name: 'objects_files')]
    public function fileIndex(Objects $objects, Request $request, UploadService $uploadService, FilesRepository $filesRepository, ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(MediaFormType::class, $objects);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $files = $form->get('name')->getData();

            if ($files) {
                foreach ($files as $file) {

                    if($uploadService->isFile($file)) {
                        $fileNameCode = $uploadService->createFileName($file, $objects, $filesRepository);
                        $fileName = $uploadService->upload($file, $objects, $fileNameCode);

                        $fl = new Files();
                        $fl->setName($fileName);
                        $fl->setCode($fileNameCode);
                        $fl->setObjects($objects);
                        $objects->addFile($fl);

                        $em = $doctrine->getManager();
                        $em->persist($objects);
                        $em->flush();
                    } else {
                        $this->addFlash('danger', 'Ceci n\'est pas un fichier valide');
                        $this->redirectToRoute('objects_files',
                            ['id' => $objects->getId()],
                        );
                    }
                }
            }
        }
        foreach ($objects as $object) {
            dd($object->getFiles()->getExtension());
        }

        return $this->render('objects/media/file.html.twig', [
            'object'    => $objects,
            'form'      => $form->createView(),
            'extension' => $objects->getFiles(),
        ]);
    }


    #[Route('/file-delete/{id}/{object}', name: 'delete_objects_file')]
    public function fileDelete(Files $files, Request $request, UploadService $uploadService, ManagerRegistry $doctrine) {

        $objId = $request->get('object');

        $filesystem = new Filesystem();
        $filesystem->remove($files->getAbsolutePath());

        $em = $doctrine->getManager();
        $em->remove($files);
        $em->flush();

        return($this->redirectToRoute('objects_files',
            ['id' => $objId],
        ));
    }





}
