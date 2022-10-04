<?php

namespace App\Entity\Objects;

use App\Entity\Objects\Media\Files;
use App\Entity\Objects\Media\Images;
use App\Entity\Objects\Media\Videos;
use App\Entity\Objects\Media\Youtube;
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
use App\Entity\Site\Action;
use App\Entity\User\User;
use App\Repository\Objects\ObjectsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Mapping\ClassMetadata;

/**
 * @ORM\Entity(repositoryClass=ObjectsRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Objects
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private ?int $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $code;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $era;

    /**
     * @ORM\Column(type="integer", nullable=true, options={"default" : 1})
     */
    private $quantity;

    /**
     * @ORM\OneToMany(targetEntity=Images::class, mappedBy="objects", orphanRemoval=true, cascade={"persist"})
     */
    private $images;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $historicDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $historicDetail;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $commentary;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $remarks;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $weight;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sizeHigh;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sizeLength;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $sizeDepth;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $stateCommentary;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isBasemented;

    /**
     * @ORM\ManyToOne(targetEntity=ExpositionLocation::class, inversedBy="objects")
     */
    private $location;

    /**
     * @ORM\ManyToOne(targetEntity=Floor::class, inversedBy="objects")
     */
    private $floor;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $showcaseCode;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $shelf;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="objectsUpdated")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    private $updatedBy;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $verificationDate;

    /**
     * @ORM\ManyToOne(targetEntity=Categories::class, inversedBy="objects")
     */
    private $categories;

    /**
     * @ORM\ManyToOne(targetEntity=SubCategories::class, inversedBy="objects")
     */
    private $subCategories;

    /**
     * @ORM\ManyToOne(targetEntity=Population::class, inversedBy="objects")
     */
    private $population;

    /**
     * @ORM\ManyToOne(targetEntity=Origin::class, inversedBy="objects")
     */
    private $origin;

    /**
     * @ORM\ManyToOne(targetEntity=Gods::class, inversedBy="objects")
     */
    private $gods;

    /**
     * @ORM\ManyToMany(targetEntity=Gods::class, inversedBy="objectsRelated")
     */
    private $relatedGods;

    /**
     * @ORM\ManyToMany(targetEntity=Materials::class, inversedBy="objects")
     */
    private $materials;

    /**
     * @ORM\ManyToOne(targetEntity=State::class, inversedBy="objects")
     */
    private $state;

    /**
     * @ORM\OneToMany(targetEntity=Videos::class, mappedBy="objects", orphanRemoval=true, cascade={"persist"})
     */
    private $videos;

    /**
     * @ORM\OneToMany(targetEntity=Files::class, mappedBy="objects", orphanRemoval=true, cascade={"persist"})
     */
    private $files;

    /**
     * @ORM\OneToMany(targetEntity=Youtube::class, mappedBy="objects")
     */
    private $youtubes;

    /**
     * @ORM\ManyToMany(targetEntity=MuseumCatalogue::class, inversedBy="objects")
     */
    private $museumCatalogue;

    /**
     * @ORM\ManyToMany(targetEntity=Book::class, inversedBy="objects")
     */
    private $book;

    /**
     * @ORM\OneToMany(targetEntity=Action::class, mappedBy="object", cascade={"persist", "remove"})
     */
    private $actions;

    public function __construct()
    {
        $this->setUpdatedAt(new \DateTimeImmutable('now'));
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTimeImmutable('now'));
        }
        if ($this->getQuantity() === null) {
            $this->setQuantity(1);
        }
        $this->images = new ArrayCollection();
        $this->relatedGods = new ArrayCollection();
        $this->materials = new ArrayCollection();
        $this->videos = new ArrayCollection();
        $this->files = new ArrayCollection();
        $this->youtubes = new ArrayCollection();
        $this->museumCatalogue = new ArrayCollection();
        $this->book = new ArrayCollection();
        $this->actions = new ArrayCollection();
    }

    public static function loadValidatorMetadata(ClassMetadata $metadata)
    {
        $metadata->addConstraint(new UniqueEntity([
            'fields' => 'id',
            'errorPath' => 'id',
            'message' => 'Ce code existe déjà !',
        ]));
        $metadata->addConstraint(new UniqueEntity([
            'fields' => 'title',
            'errorPath' => 'title',
            'message' => 'Ce titre existe déjà !',
        ]));
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getEra(): ?string
    {
        return $this->era;
    }

    public function setEra(?string $era): self
    {
        $this->era = $era;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(?int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * @return Collection|Images[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Images $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setObjects($this);
        }

        return $this;
    }

    public function removeImage(Images $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getObjects() === $this) {
                $image->setObjects(null);
            }
        }

        return $this;
    }

    public function getHistoricDate(): ?\DateTimeInterface
    {
        return $this->historicDate;
    }

    public function setHistoricDate(?\DateTimeInterface $historicDate): self
    {
        $this->historicDate = $historicDate;

        return $this;
    }

    public function getHistoricDetail(): ?string
    {
        return $this->historicDetail;
    }

    public function setHistoricDetail(?string $historicDetail): self
    {
        $this->historicDetail = $historicDetail;

        return $this;
    }

    public function getCommentary(): ?string
    {
        return $this->commentary;
    }

    public function setCommentary(?string $commentary): self
    {
        $this->commentary = $commentary;

        return $this;
    }

    public function getRemarks(): ?string
    {
        return $this->remarks;
    }

    public function setRemarks(?string $remarks): self
    {
        $this->remarks = $remarks;

        return $this;
    }

    public function getWeight(): ?float
    {
        return $this->weight;
    }

    public function setWeight(?float $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getSizeHigh(): ?float
    {
        return $this->sizeHigh;
    }

    public function setSizeHigh(?float $sizeHigh): self
    {
        $this->sizeHigh = $sizeHigh;

        return $this;
    }

    public function getSizeLength(): ?float
    {
        return $this->sizeLength;
    }

    public function setSizeLength(?float $sizeLength): self
    {
        $this->sizeLength = $sizeLength;

        return $this;
    }

    public function getSizeDepth(): ?float
    {
        return $this->sizeDepth;
    }

    public function setSizeDepth(?float $sizeDepth): self
    {
        $this->sizeDepth = $sizeDepth;

        return $this;
    }

    public function getStateCommentary(): ?string
    {
        return $this->stateCommentary;
    }

    public function setStateCommentary(?string $stateCommentary): self
    {
        $this->stateCommentary = $stateCommentary;

        return $this;
    }

    public function getIsBasemented(): ?bool
    {
        return $this->isBasemented;
    }

    public function setIsBasemented(?bool $isBasemented): self
    {
        $this->isBasemented = $isBasemented;

        return $this;
    }

    public function getLocation(): ?ExpositionLocation
    {
        return $this->location;
    }

    public function setLocation(?ExpositionLocation $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getFloor(): ?Floor
    {
        return $this->floor;
    }

    public function setFloor(?Floor $floor): self
    {
        $this->floor = $floor;

        return $this;
    }

    public function getShowcaseCode(): ?string
    {
        return $this->showcaseCode;
    }

    public function setShowcaseCode(?string $showcaseCode): self
    {
        $this->showcaseCode = $showcaseCode;

        return $this;
    }

    public function getShelf(): ?string
    {
        return $this->shelf;
    }

    public function setShelf(?string $shelf): self
    {
        $this->shelf = $shelf;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeImmutable $UpdatedAt): self
    {
        $this->updatedAt = $UpdatedAt;

        return $this;
    }

    public function getUpdatedBy(): ?User
    {
        return $this->updatedBy;
    }

    public function setUpdatedBy(?User $updatedBy): self
    {
        $this->updatedBy = $updatedBy;

        return $this;
    }

    public function getVerificationDate(): ?\DateTimeInterface
    {
        return $this->verificationDate;
    }

    public function setVerificationDate(?\DateTimeInterface $verificationDate): self
    {
        $this->verificationDate = $verificationDate;

        return $this;
    }

    public function getCategories(): ?Categories
    {
        return $this->categories;
    }

    public function setCategories(?Categories $categories): self
    {
        $this->categories = $categories;

        return $this;
    }

    public function getSubCategories(): ?SubCategories
    {
        return $this->subCategories;
    }

    public function setSubCategories(?SubCategories $subCategories): self
    {
        $this->subCategories = $subCategories;

        return $this;
    }

    public function getPopulation(): ?Population
    {
        return $this->population;
    }

    public function setPopulation(?Population $population): self
    {
        $this->population = $population;

        return $this;
    }

    public function getOrigin(): ?Origin
    {
        return $this->origin;
    }

    public function setOrigin(?Origin $origin): self
    {
        $this->origin = $origin;

        return $this;
    }

    public function getGods(): ?Gods
    {
        return $this->gods;
    }

    public function setGods(?Gods $gods): self
    {
        $this->gods = $gods;

        return $this;
    }

    /**
     * @return Collection<int, Gods>
     */
    public function getRelatedGods(): Collection
    {
        return $this->relatedGods;
    }

    public function addRelatedGod(Gods $relatedGod): self
    {
        if (!$this->relatedGods->contains($relatedGod)) {
            $this->relatedGods[] = $relatedGod;
        }

        return $this;
    }

    public function removeRelatedGod(Gods $relatedGod): self
    {
        $this->relatedGods->removeElement($relatedGod);

        return $this;
    }

    /**
     * @return Collection<int, Materials>
     */
    public function getMaterials(): Collection
    {
        return $this->materials;
    }

    public function addMaterial(Materials $material): self
    {
        if (!$this->materials->contains($material)) {
            $this->materials[] = $material;
        }

        return $this;
    }

    public function removeMaterial(Materials $material): self
    {
        $this->materials->removeElement($material);

        return $this;
    }

    public function getState(): ?State
    {
        return $this->state;
    }

    public function setState(?State $state): self
    {
        $this->state = $state;

        return $this;
    }

    /**
     * @return Collection<int, Videos>
     */
    public function getVideos(): Collection
    {
        return $this->videos;
    }

    public function addVideo(Videos $video): self
    {
        if (!$this->videos->contains($video)) {
            $this->videos[] = $video;
            $video->setObjects($this);
        }

        return $this;
    }

    public function removeVideo(Videos $video): self
    {
        if ($this->videos->removeElement($video)) {
            // set the owning side to null (unless already changed)
            if ($video->getObjects() === $this) {
                $video->setObjects(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Files>
     */
    public function getFiles(): Collection
    {
        return $this->files;
    }

    public function addFile(Files $file): self
    {
        if (!$this->files->contains($file)) {
            $this->files[] = $file;
            $file->setObjects($this);
        }

        return $this;
    }

    public function removeFile(Files $file): self
    {
        if ($this->files->removeElement($file)) {
            // set the owning side to null (unless already changed)
            if ($file->getObjects() === $this) {
                $file->setObjects(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Youtube>
     */
    public function getYoutubes(): Collection
    {
        return $this->youtubes;
    }

    public function addYoutube(Youtube $youtube): self
    {
        if (!$this->youtubes->contains($youtube)) {
            $this->youtubes[] = $youtube;
            $youtube->setObjects($this);
        }

        return $this;
    }

    public function removeYoutube(Youtube $youtube): self
    {
        if ($this->youtubes->removeElement($youtube)) {
            // set the owning side to null (unless already changed)
            if ($youtube->getObjects() === $this) {
                $youtube->setObjects(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MuseumCatalogue>
     */
    public function getMuseumCatalogue(): Collection
    {
        return $this->museumCatalogue;
    }

    public function addMuseumCatalogue(MuseumCatalogue $museumCatalogue): self
    {
        if (!$this->museumCatalogue->contains($museumCatalogue)) {
            $this->museumCatalogue[] = $museumCatalogue;
        }

        return $this;
    }

    public function removeMuseumCatalogue(MuseumCatalogue $museumCatalogue): self
    {
        $this->museumCatalogue->removeElement($museumCatalogue);

        return $this;
    }

    /**
     * @return Collection<int, Book>
     */
    public function getBook(): Collection
    {
        return $this->book;
    }

    public function addBook(Book $book): self
    {
        if (!$this->book->contains($book)) {
            $this->book[] = $book;
        }

        return $this;
    }

    public function removeBook(Book $book): self
    {
        $this->book->removeElement($book);

        return $this;
    }

    /**
     * @return Collection<int, Action>
     */
    public function getActions(): Collection
    {
        return $this->actions;
    }

    public function addAction(Action $action): self
    {
        if (!$this->actions->contains($action)) {
            $this->actions[] = $action;
            $action->setObject($this);
        }

        return $this;
    }

    public function removeAction(Action $action): self
    {
        if ($this->actions->removeElement($action)) {
            // set the owning side to null (unless already changed)
            if ($action->getObject() === $this) {
                $action->setObject(null);
            }
        }

        return $this;
    }
}
