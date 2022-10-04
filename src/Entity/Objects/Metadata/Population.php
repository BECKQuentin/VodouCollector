<?php

namespace App\Entity\Objects\Metadata;

use App\Entity\Objects\Objects;
use App\Repository\Objects\PopulationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PopulationRepository::class)
 */
class Population
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
     * @ORM\OneToMany(targetEntity=Objects::class, mappedBy="population")
     */
    private $objects;

    public function __construct()
    {
        $this->objects = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Objects>
     */
    public function getObjects(): Collection
    {
        return $this->objects;
    }

    public function addObject(Objects $object): self
    {
        if (!$this->objects->contains($object)) {
            $this->objects[] = $object;
            $object->setPopulation($this);
        }

        return $this;
    }

    public function removeObject(Objects $object): self
    {
        if ($this->objects->removeElement($object)) {
            // set the owning side to null (unless already changed)
            if ($object->getPopulation() === $this) {
                $object->setPopulation(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }
}
