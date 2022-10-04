<?php

namespace App\Form\Objects;

use App\Entity\Objects\Media\Youtube;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class YoutubeLinkFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('link', TextType::class, [
                'label'     => false,
                'attr' => array('style' => 'width: 450px')
            ])
            ->add('submit', SubmitType::class, [
                'label'     => 'Ajouter',
                'attr'      => [
                    'class' => 'btn-vodou'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Youtube::class,
        ]);
    }
}
