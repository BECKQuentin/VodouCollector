<?php

namespace App\Entity\Objects\Media;

use App\Entity\Objects\Objects;
use App\Repository\YoutubeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=YoutubeRepository::class)
 */
class Youtube
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $link;

    /**
     * @ORM\ManyToOne(targetEntity=Objects::class, inversedBy="youtubes")
     */
    private $objects;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getObjects(): ?Objects
    {
        return $this->objects;
    }

    public function setObjects(?Objects $objects): self
    {
        $this->objects = $objects;

        return $this;
    }
}
