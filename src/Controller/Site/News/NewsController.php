<?php

namespace App\Controller\Site\News;


use App\Entity\Site\News;
use App\Form\Site\NewsFormType;
use Doctrine\Persistence\ManagerRegistry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Role\RoleHierarchyInterface;

class NewsController extends AbstractController
{


    #[Route('/news-add', name: 'news_add')]
    #[Route('/news-edit/{id}', name: 'news_edit')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les Admins peuvent faire ça")]
    public function news(News $news=null, RoleHierarchyInterface $roleHierarchy, Request $request, ManagerRegistry $doctrine): Response
    {
        if ($news == null) {
            $news = new News();
        }

        $form = $this->createForm(NewsFormType::class, $news);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            //Ajout des tout les roles selon la hierarchie
            $role = $form->getData()->getRoles();
            $roles = [];
            $hierarchy = $this->getParameter('security.role_hierarchy.roles');
            $keys = array_keys($hierarchy);
            $pos = array_search($role[0], $keys);
            for ($i = $pos; $i >= 0; $i--) {
                $roles[] = $keys[$i];
            }
            //

            $news->setRoles($roles);
            $news->setCreatedBy($this->getUser());

            $em = $doctrine->getManager();
            $em->persist($news);
            $em->persist($news);
            $em->flush();

            $this->addFlash('success', "Une nouvelle Actus dans la boite aux lettres");
            return $this->redirectToRoute('home');
        }

        return $this->render('site/news/news.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/news-delete/{id}', name: 'news_delete')]
    #[IsGranted("ROLE_ADMIN", message: "Seules les Admins peuvent faire ça")]
    public function newsDelete(News $news, ManagerRegistry $doctrine): Response
    {

            $em = $doctrine->getManager();
            $em->remove($news);
            $em->flush();

            $this->addFlash('success', 'Vous avez supprimé '.$news->getTitle().' !');
            return $this->redirectToRoute('home');

    }

    #[Route('/email')]
    public function sendEmail(MailerInterface $mailer): Response
    {
        $email = (new Email())
            ->from('admin@vodoucollector.fr')
            ->to('beckquentin26@gmail.com')
            //->cc('cc@example.com')
            //->bcc('bcc@example.com')
            //->replyTo('fabien@example.com')
            //->priority(Email::PRIORITY_HIGH)
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html('<p>See Twig integration for better HTML integration!</p>');
        try {
            $mailer->send($email);
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
        }

//        //Email de commande
//        $emailService->send([
//            'to' => $user->getEmail(), //if empty => adminEmail
//            'subject' => 'Confirmation de commmande',
//            'template' => 'email/command/confirmCommand.html.twig',
//            'context' => [
//                'user' => $user,
//                'command' => $command,
//                'article' => $article,
//            ],
//        ]);


        // ...
        return $this->redirectToRoute('home');
    }




}
