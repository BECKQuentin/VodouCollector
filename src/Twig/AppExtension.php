<?php

namespace App\Twig;

use App\Entity\Objects;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{

    public function getFilters(): array
    {
        return [
            new TwigFilter('className', [$this, 'getFunctions']),
            new TwigFilter('image', [$this, 'getImagesPath']),
            new TwigFilter('video', [$this, 'getVideosPath']),
            new TwigFilter('file', [$this, 'getFilesPath']),

            new TwigFilter('roles', [$this, 'printRoles']),
        ];
    }
    public function getFunctions(): array
    {
        return [
            new TwigFunction('get_class', 'get_class'),
        ];
    }
    public function getImagesPath($images): string
    {
        return '/upload/images/objects/'.$images;
    }

    public function getVideosPath($videos): string
    {
        return '/upload/videos/objects/'.$videos;
    }
    public function getFilesPath($files): string
    {
        return '/upload/files/objects/'.$files;
    }

    public function printRoles($role) {
        if ($role === 'ROLE_ADMIN') {
            return 'Administrateur';
        } elseif ($role === 'ROLE_MEMBER') {
            return 'Membre';
        } elseif ($role === 'ROLE_GUEST') {
            return 'Invité';
        } else {
            return 'Pas de Rôle';
        }

    }
}
