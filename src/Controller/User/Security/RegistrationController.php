<?php

namespace App\Controller\User\Security;

use App\Entity\User\User;
use App\Form\User\RegistrationFormType;
use App\Repository\User\UserRepository;
use App\Security\EmailVerifier;
use App\Security\LoginFormAuthenticator;
use App\Service\EmailService;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\LoginLink\LoginLinkHandlerInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;


class RegistrationController extends AbstractController
{
    private EmailVerifier $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/add-member', name: 'member_add')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les ADMINS peuvent faire ça")]
    public function registration(UserPasswordHasherInterface $passwordHasher, LoginLinkHandlerInterface $loginLinkHandler, MailerInterface $mailer, Request $request, ManagerRegistry $doctrine): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // get password entry
            $plaintextPassword = $form->getData()->getPassword();
            // hash the password (based on the security.yaml config for the $user class)
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );

            $user->setPassword($hashedPassword);

            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();


            //création de lien de connection
            $loginLinkDetails = $loginLinkHandler->createLoginLink($user);

            //Email d'ajout de membre
            $email = (new TemplatedEmail())
                ->from('admin@vodoucollector.fr')
                ->to($user->getEmail())
                ->subject('[Important] Bienvenue à vous sur VodouCollector')
                ->htmlTemplate('email/member/member_add.html.twig')
                ->context([
                    'user' => $user,
                    'loginLink' => $loginLinkDetails
                ])
            ;
            try {
                $mailer->send($email);
            } catch (TransportExceptionInterface $e) {
                // some error prevented the email sending; display an
                // error message or try to resend the message
            }
            $this->addFlash('success', "Utilisateur ajouté & Email envoyé!");
            return $this->redirectToRoute('member', ['id' => $user->getId()]);
        }
        return $this->render('user/member/add.html.twig', [
            'form'          => $form->createView(),
            'adding_member' => true
        ]);
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request, TranslatorInterface $translator, UserRepository $userRepository, LoginFormAuthenticator $loginFormAuthenticator): Response
    {
        $id = $request->get('id');

        if (null === $id) {
            return $this->redirectToRoute('app_login');
        }

        $user = $userRepository->find($id);

        if (null === $user) {
            return $this->redirectToRoute('app_login');
        }

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            $this->emailVerifier->handleEmailConfirmation($request, $user);

        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $translator->trans($exception->getReason(), [], 'VerifyEmailBundle'));
            return $this->redirectToRoute('app_login');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates

//        try {
//            $userAuthenticator->authenticateUser(
//                $user,
//                $loginFormAuthenticator,
//                $request,
//            );
//        } catch (\LogicException $e) {
//            $this->addFlash($e->getCode(), 'Erreur de connection');
//        }

//        // Authenticate user
//        $guard->authenticateUserAndHandleSuccess(
//            $user,
//            $request,
//            $loginAuthenticator,
//            'main'
//        );


        return $this->redirectToRoute('home');
    }

    //Url pour se connecter via les login_link envoyé par mail
    #[Route('/login-check', name: 'login_check')]
    public function login_check(UserRepository $userRepository, Request $request): Response
    {
        $this->addFlash('danger', "Changer votre mot de passe");
        return $this->redirectToRoute('member');
    }
}