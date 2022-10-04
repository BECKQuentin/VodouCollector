<?php

namespace Gemonos\GemonosCaptchaBundle\src;

use Symfony\Component\HttpKernel\Bundle\AbstractBundle;

class GemonosCaptchaBundle extends AbstractBundle
{
    public function getPath(): string
    {
        return __DIR__;
    }
}