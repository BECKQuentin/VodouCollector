<?php

namespace App\Form\User;

use App\Entity\User\Status;
use App\Entity\User\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class, [
                'label'     => 'Email',
                'required'  => true,
            ])
            ->add('password', RepeatedType::class, [
                'type'      => PasswordType::class,
                'invalid_message' => 'Le mot de passe doit correspondre',
                'options' => ['attr' => ['class' => 'password-field']],
                'required' => true,
                'first_options'  => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Répeter le mot de passe'],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('firstname', TextType::class, [
                'label'     => 'Prénom',
                'required'  => true,
            ])
            ->add('lastname', TextType::class, [
                'label'     => 'Nom',
                'required'  => true,
            ])
            ->add('avatar', FileType::class, [
                'label'     => 'Avatar',
                'required'  => false,
//                'constraints' => [
//                    new File([
//                        'maxSize' => '5M'
//                    ])
//                ]
            ])
            ->add('status', EntityType::class, [
                'class'     => Status::class,
                'choice_label' => 'name',
                'multiple' => false,
                'expanded' => true,
                'label'     => 'Statut',
                'required'  => false,
            ])
            ->add('modify', SubmitType::class, [
                'label'     => 'Modifier',
                'attr'      => [
                    'class' => 'btn-vodou mt-3'
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label'     => 'S \'inscrire',
                'attr'      => [
                    'class' => 'btn-vodou mt-3'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
