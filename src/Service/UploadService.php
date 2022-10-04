<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadService
{
    private string $uploadImagesDirectory;
    private string $uploadVideosDirectory;
    private string $uploadFilesDirectory;

    public function __construct(string $uploadImagesDirectory, string $uploadVideosDirectory, string $uploadFilesDirectory)
    {
        $this->uploadImagesDirectory = $uploadImagesDirectory;
        $this->uploadVideosDirectory = $uploadVideosDirectory;
        $this->uploadFilesDirectory = $uploadFilesDirectory;
    }

    public function isImage($file): bool
    {
        $extension = $file->getClientOriginalExtension();
        $arrVideoExtension  = ['jpeg', 'jpg', 'gif', 'png', 'bmp'];

        if(in_array(strtolower($extension), $arrVideoExtension))
        {
            return true;
        }
        return false;
    }

    public function isVideo($file): bool
    {
        $extension = $file->getClientOriginalExtension();
        $arrVideoExtension  = ['mov', 'mp4', 'avi', 'wmv', 'flv', '3gp', 'webm'];

        if(in_array(strtolower($extension), $arrVideoExtension))
        {
            return true;
        }
        return false;
    }

    public function isFile($file): bool
    {
        $extension = $file->getClientOriginalExtension();
        $arrVideoExtension  = ['pdf', 'xls', 'xlsx'];

        if(in_array(strtolower($extension), $arrVideoExtension))
        {
            return true;
        }
        return false;
    }

    public function upload(UploadedFile $file, $entity, $fileNameCode): string
    {

        $fileName = $fileNameCode.'.'.$file->getClientOriginalExtension();

        if ($this->isImage($file)) {
            $path = $this->uploadImagesDirectory . "/";
            $file->move($path, $fileName);
        } elseif ($this->isVideo($file)) {
            $path = $this->uploadVideosDirectory . "/";
            $file->move($path, $fileName);
        } elseif ($this->isFile($file)) {
            $path = $this->uploadFilesDirectory . "/";
            $file->move($path, $fileName);
        }

        return $fileName;
    }


    public function createFileName(UploadedFile $file, $entity, $repository): string
    {
        $arrCode    = [];
        $arrLetter  = [];
        $alphas = range('a', 'z');

        if ($this->isImage($file)) {

            $arrImages  = $repository->findAllImagesByObject($entity);

            //extraire code pour toutes les images de l'objet
            foreach ($arrImages as $fileCode) {
                $arrCode[] = $fileCode->getCode();
            }

            //extraire chacune des lettres unique pour les fichiers de l'objet
            foreach ($arrCode as $code) {
                $arrLetter[] = explode('_', $code)[1];
            }

            //Attribuer lettre du regex si inexistante
            foreach ($alphas as $a) {
                if (in_array($a, $arrLetter) == false) {
                    return $entity->getCode().'_'.$a;
                }
            }

            return $entity->getCode().'_'.'none';

        } elseif ($this->isVideo($file)) {

            $arrVideos  = $repository->findAllVideosByObject($entity);

            //extraire code pour toutes les videos de l'objet
            foreach ($arrVideos as $vidCode) {
                $arrCode[] = $vidCode->getCode();
            }

            //extraie chacune des lettre pour toutes les images de l'objet
            foreach ($arrCode as $code) {
                $arrLetter[] = explode('_', $code)[2];
            }
            //Attribuer lettre du regex si inexistante
            foreach ($alphas as $a) {
                $res = in_array($a, $arrLetter );
                if ($res == false) {
                    $fileNameCode = $entity->getCode().'_video_'.$a;
                    return $fileNameCode;
                }
            }
            return $entity->getCode().'_'.'none';

        } elseif ($this->isFile($file)) {
            $arrFiles  = $repository->findAllFilesByObject($entity);

            //extraire code pour toutes les videos de l'objet
            foreach ($arrFiles as $fileCode) {
                $arrCode[] = $fileCode->getCode();
            }

            //extraie chacune des lettre pour toutes les images de l'objet
            foreach ($arrCode as $code) {
                $arrLetter[] = explode('_', $code)[2];
            }
            //Attribuer lettre du regex si inexistante
            foreach ($alphas as $a) {
                $res = in_array($a, $arrLetter );
                if ($res == false) {
                    $fileNameCode = $entity->getCode().'_file_'.$a;
                    return $fileNameCode;
                }
            }
            return $entity->getCode().'_'.'none';
        }
        return $entity->getCode().'_'.'none';
    }

//    public function isImage($path): bool
//    {
//        $a = getimagesize($path);
//        $image_type = $a[2];
//
//        if(in_array($image_type , array(IMAGETYPE_GIF , IMAGETYPE_JPEG ,IMAGETYPE_PNG , IMAGETYPE_BMP)))
//        {
//            return true;
//        }
//        return false;
//    }



}