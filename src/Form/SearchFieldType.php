<?php

namespace App\Form;

use App\Data\SearchData;
use App\Entity\Objects\Metadata\Categories;
use App\Entity\Objects\Metadata\ExpositionLocation;
use App\Entity\Objects\Metadata\Floor;
use App\Entity\Objects\Metadata\Gods;
use App\Entity\Objects\Metadata\Materials;
use App\Entity\Objects\Metadata\Origin;
use App\Entity\Objects\Metadata\Population;
use App\Entity\Objects\Metadata\State;
use App\Entity\Objects\Metadata\SubCategories;
use Svg\Tag\Text;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchFieldType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('q', TextType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'Rechercher',
                    'autofocus' => true
                ]
            ])
            ->add('isBasemented', CheckboxType::class, [
                'label' => 'Socle',
                'required' => false,
            ])
            ->add('location', EntityType::class, [
                'class'     => ExpositionLocation::class,
                'label'         => false,
                'choice_label'  => 'nameFR',
                'required'      => false,
                'expanded'      => true,
                'multiple'      => true
            ])
//            ->add('isExposedTemp', CheckboxType::class, [
//                'label' => 'Expo Temporaire',
//                'required' => false,
//            ])
//            ->add('isExposedPerm', CheckboxType::class, [
//                'label' => 'Expo Permanente',
//                'required' => false,
//            ])
//            ->add('isExposedStock', CheckboxType::class, [
//                'label' => 'En stock',
//                'required' => false,
//            ])
//            ->add('isRent', CheckboxType::class, [
//                'label' => 'Loué',
//                'required' => false,
//            ])
            ->add('categories', EntityType::class, [
                'label' => 'Catégories',
                'required' => false,
                'class' => Categories::class,
                'multiple'  => true,
            ])
            ->add('subCategories', EntityType::class, [
                'label' => 'Sous-Catégories',
                'required' => false,
                'class' => SubCategories::class,
                'multiple'  => true,
            ])
            ->add('gods', EntityType::class, [
                'label' => 'Divinités',
                'required' => false,
                'class' => Gods::class,
                'multiple'  => true,
            ])
            ->add('relatedGods', EntityType::class, [
                'label' => 'Dieux associés',
                'required' => false,
                'class' => Gods::class,
                'multiple'  => true,
            ])
            ->add('population', EntityType::class, [
                'label' => 'Population',
                'required' => false,
                'class' => Population::class,
            ])
            ->add('origin', EntityType::class, [
                'label' => 'Origine',
                'required' => false,
                'class' => Origin::class,
            ])
            ->add('materials', EntityType::class, [
                'label' => 'Matériaux',
                'required' => false,
                'class' => Materials::class,
                'multiple'  => true,
            ])
            ->add('state', EntityType::class, [
                'label' => 'Etat',
                'required' => false,
                'class' => State::class,
                'multiple'  => true,
            ])
            ->add('floor', EntityType::class, [
                'label' => 'Etage',
                'required' => false,
                'class' => Floor::class,
                'multiple'  => true,
            ])
            ->add('showcaseCode', TextType::class, [
                'label' => 'Numéro de vitrine',
                'required' => false,
            ])
            ->add('shelf', TextType::class, [
                'label' => 'Etagère',
                'required' => false,
            ])


            //SORT
            ->add('isSortAlpha', CheckboxType::class, [
                'label' => false,
                'label_attr' => ['class' => 'fa-solid fa-arrow-down-a-z'],
                'required' => false,
                'data' => true,
            ])
            ->add('isSortAlphaReverse', CheckboxType::class, [
                'label' => false,
                'label_attr' => ['class' => 'fa-solid fa-arrow-down-z-a'],
                'required' => false,
            ])
            ->add('isSortNumeric', CheckboxType::class, [
                'label' => false,
                'label_attr' => ['class' => 'fa-solid fa-arrow-down-1-9'],
                'required' => false,
            ])
            ->add('isSortNumericReverse', CheckboxType::class, [
                'label' => false,
                'label_attr' => ['class' => 'fa-solid fa-arrow-down-9-1'],
                'required' => false,
            ])
            ->add('sortDateUpdate', CheckboxType::class, [
                'label' => false,
                'label_attr' => ['class' => 'fa-solid fa-clock-rotate-left'],
                'required' => false,
            ])
            ->add('updatedBy', TextType::class, [
                'label' => false,
                'required' => false,
                'attr' => [
                    'placeholder' => 'modifié par',
                ]
            ])


            ->add('submit', SubmitType::class, [
                'label' => 'Filtrer',
                'attr' => [
                    'class' => 'btn-vodou my-3'
                ]
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SearchData::class,
            'method'    => 'GET',
            'csrf_protection' => false,
        ]);
    }

    public function getBlockPrefix(): string
    {
        return '';
    }
}
