<?php

namespace Gemonos\GemonosCaptchaBundle\src\Form;


use Gemonos\GemonosCaptchaBundle\src\Entity\Captcha;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CaptchaFormType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('captcha', TextType::class, [
                'label' => 'Captcha',
                'required' => true,
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Vérifier',
                'attr'      => [
                    'class' => 'btn-vodou my-3'
                ]
            ])
        ;
    }
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Captcha::class,
        ]);
    }
//    public function configureOptions(OptionsResolver $resolver): void
//    {
//        $resolver->setDefaults([
//            'mapped' => false,
//        ]);
//    }
//
//    public function getBlockPrefix()
//    {
//        return 'recaptcha_submit';
//    }
//
//    public function getParent()
//    {
//        return TextType::class;
//    }
}
