<?php

namespace App\Form\Objects;

use App\Entity\Objects\Objects;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MediaFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', FileType::class, [
                'label'         => false,
                'multiple'      => true,
                'mapped'        => false,
                'required'      => false,
                'attr'          => ['class' => 'btn'],
                'label_attr'    => ['class' => 'CUSTOM_LABEL_CLASS'],
            ])

            ->add('submit', SubmitType::class, [
                'label' => 'Valider',
                'attr' => [
                    'class' => 'btn-vodou'
                ]
            ])
//            ->add('code')
//            ->add('objects')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Objects::class,
        ]);
    }
}
