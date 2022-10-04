<?php

namespace App\Entity\Objects;

use App\Repository\Objects\BookRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BookRepository::class)
 */
class Book
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $author;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $editor;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $year;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $quantity;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pages;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $notice;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rentNumber;

    /**
     * @ORM\ManyToMany(targetEntity=Libraries::class, mappedBy="book")
     */
    private $libraries;

    /**
     * @ORM\ManyToMany(targetEntity=Objects::class, mappedBy="book")
     */
    private $objects;

    public function __construct()
    {
        $this->libraries = new ArrayCollection();
        $this->objects = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(?string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getEditor(): ?string
    {
        return $this->editor;
    }

    public function setEditor(?string $editor): self
    {
        $this->editor = $editor;

        return $this;
    }

    public function getYear(): ?\DateTimeInterface
    {
        return $this->year;
    }

    public function setYear(?\DateTimeInterface $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getQuantity(): ?string
    {
        return $this->quantity;
    }

    public function setQuantity(?string $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    public function getPages(): ?string
    {
        return $this->pages;
    }

    public function setPages(?string $pages): self
    {
        $this->pages = $pages;

        return $this;
    }

    public function getNotice(): ?string
    {
        return $this->notice;
    }

    public function setNotice(?string $notice): self
    {
        $this->notice = $notice;

        return $this;
    }

    public function getRentNumber(): ?int
    {
        return $this->rentNumber;
    }

    public function setRentNumber(?int $rentNumber): self
    {
        $this->rentNumber = $rentNumber;

        return $this;
    }

    /**
     * @return Collection<int, Libraries>
     */
    public function getLibraries(): Collection
    {
        return $this->libraries;
    }

    public function addLibraries(Libraries $libraries): self
    {
        if (!$this->libraries->contains($libraries)) {
            $this->libraries[] = $libraries;
            $libraries->addBook($this);
        }

        return $this;
    }

    public function removeLibraries(Libraries $libraries): self
    {
        if ($this->libraries->removeElement($libraries)) {
            $libraries->removeBook($this);
        }

        return $this;
    }

    public function __toString()
    {
        return $this->title;
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
            $object->addBook($this);
        }

        return $this;
    }

    public function removeObject(Objects $object): self
    {
        if ($this->objects->removeElement($object)) {
            $object->removeBook($this);
        }

        return $this;
    }
}
