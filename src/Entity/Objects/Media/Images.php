<?php

namespace App\Entity\Objects\Media;

use App\Entity\Objects\Objects;
use App\Repository\Objects\ImagesRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImagesRepository::class)
 */
class Images
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
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Objects::class, inversedBy="images")
     * @ORM\JoinColumn(nullable=false)
     */
    private $objects;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }
    
    public function getAbsolutePath()
    {
        return null === $this->name
            ? null
            : $this->getUploadRootDir().'\\'.$this->name;
    }

    protected function getUploadRootDir()
    {
        // the absolute directory path where uploaded
        // documents should be saved
        $dirname = dirname(__DIR__,4);
        return $dirname.'\public'.$this->getUploadDir();
    }

    protected function getUploadDir()
    {
        // get rid of the __DIR__ so it doesn't screw up
        // when displaying uploaded doc/image in the view.
        return '\upload\images\objects';
    }

}
