<?php

namespace App\Controller\Objects;

use App\Data\SearchData;
use App\Entity\Objects\Objects;
use App\Form\SearchFieldType;
use App\Repository\Objects\ObjectsRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;

class BookmarksController extends AbstractController
{
    /*Ajout aux favoris*/
    //http://127.0.0.1:8000/objects-bookmark/2
    #[Route('/objects-bookmark/{id}', name: 'objects_bookmark')]
    public function bookmarkObjects(Objects $object=null, ManagerRegistry $doctrine): Response
    {

        if(!empty($object)) {
            $user = $this->getUser();
            $bookmarks = $user->getBookmark();

            if (!in_array($object->getId(), $bookmarks)) {
                $bookmarks[] = $object->getId();
                $user->setBookmark($bookmarks);

                $em = $doctrine->getManager();
                $em->persist($user);
                $em->flush();
            }
            else {
                $pos = array_search($object->getId(), $bookmarks);
                if ($pos !== false) {
                    unset($bookmarks[$pos]);
                    $user->setBookmark($bookmarks);
                    $em = $doctrine->getManager();
                    $em->persist($user);
                    $em->flush();
                }
            }
            return $this->json($user->getBookmark());
        } else {
            return $this->json( 'Object Not Found.',404);
        }

//        if(!empty($object)) {
//            $sessionBookmarks = $session->get('bookmark', []);
//            if (!in_array($object->getId(), $sessionBookmarks)) {
//                $sessionBookmarks[] = $object->getId();
//                $session->set('bookmark',  $sessionBookmarks);
//            }
//            else {
//                $pos = array_search($object->getId(), $sessionBookmarks);
//                if ($pos !== false) {
//                    unset($sessionBookmarks[$pos]);
//                    $session->set('bookmark',  $sessionBookmarks);
//                }
//            }
//            return $this->json($sessionBookmarks);
//        } else {
//            return $this->json( 'Object Not Found.',404);
//        }
    }

    /*Listing des favoris*/
    #[Route('/bookmarks', name: 'bookmarks')]
    public function bookmarks(ObjectsRepository $objectsRepository, Request $request, PaginatorInterface $paginator): Response
    {

        $bookmarks = $this->getUser()->getBookmark();
//        $sessionBookmarks = $session->get('bookmark', []);

        $arrObjects = $objectsRepository->findBy( array('id' => $bookmarks), array('id' => 'DESC') );

        //array des ID de la recherche
        $arrIdSearchObj = [];
        foreach ($arrObjects as $objId) {
            $arrIdSearchObj[] = $objId->getId();
        }
        $idsSearchObjs = implode(',', $arrIdSearchObj);
        if ($idsSearchObjs === '') {
            $idsSearchObjs = 'null';
        }

        $objPaginate = $paginator->paginate(
            $arrObjects,
            $request->get('page', 1),
            15
        );

        return $this->render('objects/objects/listing.html.twig', [
            'bookmarks'      => $bookmarks,
            'objects'       => $objPaginate,
            'totalItemsCount' => count($bookmarks),
            'idsSearchObjs' => $idsSearchObjs,
        ]);


    }
}
