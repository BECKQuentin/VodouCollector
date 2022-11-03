<?php

namespace App\Service;

use Exception;
use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

class EmailService
{

    private MailerInterface $mailer;
    private string $emailAdmin;
    private string $emailDeveloper;
    private string $appEnv;
    private LoggerInterface $logger;

    public function __construct(        
        MailerInterface $mailer,
        string $emailAdmin,
        string $emailDeveloper,
        string $appEnv,
        LoggerInterface $mailerLogger
        )
    {
        $this->mailer = $mailer;
        $this->emailAdmin = $emailAdmin;        
        $this->emailDeveloper = $emailDeveloper;  
        $this->appEnv = $appEnv;        
        $this->logger = $mailerLogger;        
    }


    public function send(array $data): bool
    {
        if ($this->appEnv === 'dev') {
            if (!isset($data['subject'])) {
                throw new Exception("You should specify a subject");           
            }
            $data['to'] = $this->emailDeveloper;
        }

//        $email = (new Email())
//            ->from('admin@vodoucollector.fr')
//            ->to('beckquentin26@gmail.com')
//            //->cc('cc@example.com')
//            //->bcc('bcc@example.com')
//            //->replyTo('fabien@example.com')
//            //->priority(Email::PRIORITY_HIGH)
//            ->subject('Time for Symfony Mailer!')
//            ->text('Sending emails is fun again!')
//            ->html('<p>See Twig integration for better HTML integration!</p>');

        $email = (new TemplatedEmail())
            ->from($data['from'] ?? $this->emailAdmin)
            ->to($data['to'] ?? $this->emailAdmin)
            ->replyTo($data['replyTo'] ?? $data['from'] ?? $this->emailAdmin)
            ->subject($data['subject'] ?? 'Vodou Collector')
            ->htmlTemplate($data['template'])
            ->context($data['context'] ?? [])
        ;

        try {
            $this->mailer->send($email);
            return true;
        } catch (TransportExceptionInterface $e) {
            // some error prevented the email sending; display an
            // error message or try to resend the message
            $this->logger->alert(sprintf("%s in %s at %s : %s", __FUNCTION__, __FILE__, __LINE__, $e->getMessage()));
        }



        return false;
    }

}