<?php

namespace App\Form\Objects;

use App\Entity\Objects\Book;
use App\Entity\Objects\Metadata\Categories;
use App\Entity\Objects\Metadata\ExpositionLocation;
use App\Entity\Objects\Metadata\Floor;
use App\Entity\Objects\Metadata\Gods;
use App\Entity\Objects\Metadata\Materials;
use App\Entity\Objects\Metadata\MuseumCatalogue;
use App\Entity\Objects\Metadata\Origin;
use App\Entity\Objects\Metadata\Population;
use App\Entity\Objects\Metadata\State;
use App\Entity\Objects\Metadata\SubCategories;
use App\Entity\Objects\Objects;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ObjectsFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {

        $builder
            ->add('code', TextType::class, [
                'label'         => 'Code',
                'required'      => true
            ])
            ->add('title', TextType::class, [
                'label'         => 'Titre',
                'required'      => true
            ])
            ->add('categories', EntityType::class, [
                'class'         => Categories::class,
                'label'         => 'Categories',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => false,
            ])->add('subCategories', EntityType::class, [
                'class'         => SubCategories::class,
                'label'         => 'Sous-Categories',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => false,
            ])
            ->add('population', EntityType::class, [
                'class'         => Population::class,
                'label'         => 'Population',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => false,
            ])
            ->add('origin', EntityType::class, [
                'class'         => Origin::class,
                'label'         => 'Origine',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => false,
            ])
            ->add('gods', EntityType::class, [
                'class'         => Gods::class,
                'label'         => 'Divinité',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => false,
            ])
            ->add('relatedGods', EntityType::class, [
                'class'         => Gods::class,
                'label'         => 'Divinités Associées',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => true,
            ])
            ->add('materials', EntityType::class, [
                'class'         => Materials::class,
                'label'         => 'Materiaux',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => true,
            ])
            ->add('museumCatalogue', EntityType::class, [
                'class'         => MuseumCatalogue::class,
                'label'         => 'Parution du Musée',
                'choice_label'  => 'name',
                'required'      => false,
                'multiple'      => true,
            ])
            ->add('book', EntityType::class, [
                'class'         => Book::class,
                'label'         => 'Ouvrages',
                'choice_label'  => 'title',
                'required'      => false,
                'multiple'      => true,
            ])
            ->add('description', TextareaType::class, [
                'label'         => 'Description',
                'required'      => false
            ])
            ->add('era', TextType::class, [
                'label'         => 'Datation de l\' objet',
                'required'      => false
            ])
            ->add('quantity', IntegerType::class, [
                'label'         => 'Quantité',
                'required'      => false
            ])
            ->add('historicDate', DateType::class, [
                'label'         => 'arrivé dans la collection le',
                'widget' => 'single_text',
                'required'      => false
            ])
            ->add('historicDetail', TextType::class, [
                'label'         => 'Mode d\' acquisition',
                'required'      => false,
            ])
            ->add('commentary', TextareaType::class, [
                'label'         => 'Fonction d\' usage',
                'required'      => false
            ])
            ->add('weight', IntegerType::class, [
                'label'         => 'Poids(g)',
                'required'      => false
            ])
            ->add('sizeHigh', IntegerType::class, [
                'label'         => 'H(cm)',
                'required'      => false
            ])
            ->add('sizeLength', IntegerType::class, [
                'label'         => 'L(cm)',
                'required'      => false
            ])
            ->add('sizeDepth', IntegerType::class, [
                'label'         => 'P(cm)',
                'required'      => false
            ])
            ->add('stateCommentary', TextType::class, [
                'label'         => 'Remarque sur l\' état',
                'required'      => false
            ])
            ->add('state', EntityType::class, [
                'class'         => State::class,
                'label'         => 'Etat',
                'choice_label'  => 'name',
                'required'      => false,
            ])
            ->add('isBasemented', CheckboxType::class, [
                'label'         => 'Socle',
                'required'      => false
            ])
            ->add('location', EntityType::class, [
                'class'     => ExpositionLocation::class,
                'label'         => false,
                'choice_label'  => 'nameFR',
                'required'      => true,
                'expanded'      => true,
                'multiple'      => false
            ])
            ->add('remarks', TextareaType::class, [
                'label'         => 'Remarques',
                'required'      => false
            ])
            ->add('floor', EntityType::class, [
                'class'         => Floor::class,
                'label'         => 'Etage',
                'choice_label'  => 'name',
                'required'      => false,
            ])
            ->add('showCaseCode', TextType::class, [
                'label'         => 'Numéro de vitrine',
                'required'      => false,
            ])
            ->add('shelf', TextType::class, [
                'label'         => 'Etagère',
                'required'      => false,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Valider',
                'attr' => [
                    'class' => 'btn-vodou my-3'
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Objects::class,
        ]);
    }
}
