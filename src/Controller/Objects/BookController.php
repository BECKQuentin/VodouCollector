<?php

namespace App\Controller\Objects;

use App\Entity\Objects\Book;
use App\Entity\Objects\Libraries;
use App\Form\Objects\BookFormType;
use App\Repository\Objects\BookRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{

    #[Route('/book-add', name: 'book_add')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function addBook(Request $request, ManagerRegistry $doctrine): Response
    {
        $book = new Book();
        $form = $this->createForm(BookFormType::class, $book);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $libraries = $form->getData()->getLibraries();
            foreach ($libraries as $library) {
                $book->addLibraries($library);
                $library->addBook($book);
            }

            $em = $doctrine->getManager();
            $em->persist($book);
            $em->flush();

            $this->addFlash('success', "L'article a bien été ajoutée");
            return $this->redirectToRoute('libraries');
        }

        return $this->render('objects/book/add.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/book-edit/{id}', name: 'edit_book')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function editBook(Book $book, Request $request, ManagerRegistry $doctrine): Response
    {

        $form = $this->createForm(BookFormType::class, $book);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $doctrine->getManager();
            $em->persist($book);
            $em->flush();

            $this->addFlash('success', "Les modifications ont bien été sauvegardées !");
        }

        return $this->render('objects/book/edit.html.twig', [
            'form'      => $form->createView(),
            'book'      => $book,
        ]);
    }


    #[Route('/book-listing/', name: 'listing_book')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function listingBook(BookRepository $bookRepository, Request $request, ManagerRegistry $doctrine): Response
    {

        return $this->render('objects/book/listing.html.twig', [
            'books'      => $bookRepository->findAll(),
        ]);
    }


    #[Route('/book-delete/{id}/', name: 'book_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function deleteBook(Book $book, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $em->remove($book);
        $em->flush();

        $this->addFlash('danger', 'Vous avez supprimé '.$book->getTitle().' !');
        return $this->redirectToRoute('libraries');
    }


    #[Route('/book/{id}/', name: 'book')]
    public function viewBook(Book $book, ManagerRegistry $doctrine): Response
    {

        return $this->render('objects/book/view.html.twig', [
            'book'      => $book,
        ]);
    }
}
