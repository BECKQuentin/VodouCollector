<?php

namespace App\Form\Objects;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class MetaDataFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class, [
                'label'     => 'Nom',
                'required'  => false
            ])
            ->add('submit', SubmitType::class, [
                'label'     => 'Ajouter une categorie',
                'attr'      => [
                    'class' => 'btn-vodou mb-3'
                ]
            ])
        ;
    }

//    public function configureOptions(OptionsResolver $resolver): void
//    {
//        $resolver->setDefaults([
//            'data_class' => Categories::class,
//        ]);
//    }
}
