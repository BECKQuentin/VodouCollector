<?php

namespace App\Gemonos\GemonosCaptchaBundle\src\Entity;


class Captcha
{

    private $code;

    public function __construct()
    {
        $this->code = $this->generateRandomString();
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function  getRandImage(): ?string
    {
        //récupération/vérification des images
        $imagesDir = dirname(__DIR__, 2) . '/Resources/public/upload/img/';
        $arrExtAllowed = ["jpg", "jpeg", "gif", "png"];
        if (!empty($imagesDir)) {
            $listFiles = scandir($imagesDir);
        }
        if (!empty($listFiles)) {
            foreach ($listFiles as $file) {
                $ext = pathinfo($file, PATHINFO_EXTENSION);
                if (in_array($ext, $arrExtAllowed)) {
                    $arrImgs[] = $file;
                }
            }
            //création aléatoire image
            if (!empty($arrImgs)) {
                $r = rand(0, count($arrImgs)-1);
                return $imagesDir. $arrImgs[$r];
            }
        }
        return $imagesDir.'default.jpg';

    }

    function generateRandomString($length = 4) {
        $characters = '0123456789';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

}
