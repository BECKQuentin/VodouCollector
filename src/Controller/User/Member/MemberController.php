<?php

namespace App\Controller\User\Member;

use App\Form\User\RegistrationFormType;
use App\Repository\User\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MemberController extends AbstractController
{


    #[Route('/profil', name: 'profil')]
    public function index(): Response
    {
//        $user = $this->getUser();

        return $this->render('user/member/profil.html.twig', [

        ]);
    }


    #[Route('/member', name: 'member')]
    public function member(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->render('user/member/listing.html.twig', [
            'users' => $users,
        ]);
    }


    #[Route('/member-update', name: 'member_update')]
    public function memberUpdate(Request $request, ManagerRegistry $doctrine)
    {
        $user = $this->getUser();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->remove('email')->remove('password')->remove('agreeTerms')->remove('submit');
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('success', "Les modifications ont bien été sauvegardées !");
            return $this->redirectToRoute('profil', ['id' => $user->getId()]);
        }

        return $this->render('user/member/update.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
    }
}