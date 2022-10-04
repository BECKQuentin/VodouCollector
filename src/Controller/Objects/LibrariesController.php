<?php

namespace App\Controller\Objects;

use App\Entity\Objects\Libraries;
use App\Form\Objects\LibrariesFormType;
use App\Repository\Objects\LibrariesRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LibrariesController extends AbstractController
{

    #[Route('/libraries', name: 'libraries')]
    #[IsGranted("ROLE_MEMBER", message: "Seules les Membre peuvent faire ça")]
    public function listingLibraries(LibrariesRepository $librariesRepository): Response
    {
        $libraries = $librariesRepository->findAll();

        return $this->render('objects/libraries/listing.html.twig', [
            'libraries'     => $libraries,
        ]);
    }


    #[Route('/library-add', name: 'library_add')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addLibrary(Request $request, LibrariesRepository $librariesRepository, ManagerRegistry $doctrine): Response
    {
        $allLibraries = $librariesRepository->findAll();
        $libraries = new Libraries();
        $form = $this->createForm(LibrariesFormType::class, $libraries);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $doctrine->getManager();
            $em->persist($libraries);
            $em->flush();

            $this->addFlash('success', "L'article a bien été ajoutée");
            return $this->redirectToRoute('library_add');
        }

        return $this->render('objects/libraries/add.html.twig', [
            'form'      => $form->createView(),
            'libraries' => $allLibraries,
        ]);
    }


    #[Route('/library-edit/{id}', name: 'edit_library')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editLibrary(Libraries $library, LibrariesRepository $librariesRepository, Request $request, ManagerRegistry $doctrine): Response
    {
        $allLibraries = $librariesRepository->findAll();
        $form = $this->createForm(LibrariesFormType::class, $library);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $doctrine->getManager();
            $em->persist($library);
            $em->flush();

            $this->addFlash('success', "Les modifications ont bien été sauvegardées !");
            return $this->redirectToRoute('library_add');
        }

        return $this->render('objects/libraries/add.html.twig', [
            'library'    => $library,
            'libraries'     => $allLibraries,
            'form'          => $form->createView(),
        ]);
    }


    #[Route('/library-delete/{id}', name: 'delete_library')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteLibraries(Libraries $library, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($library);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$library->getTitle().' !');
        return $this->redirectToRoute('library_add');
    }
}
