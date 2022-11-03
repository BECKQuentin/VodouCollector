<?php

namespace App\Entity\User;

use App\Entity\Objects\Libraries;
use App\Entity\Objects\Objects;
use App\Entity\Site\Action;
use App\Entity\Site\News;
use App\Repository\User\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;




//#[ORM\Entity(repositoryClass: UserRepository::class)]
//#[UniqueEntity(fields: 'emails', message: "There is already an account with this email")]
/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
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
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $roles = [];

    /**
     * @ORM\ManyToOne(targetEntity=Status::class, inversedBy="users")
     */
    private $status;

    /**
     * @ORM\OneToMany(targetEntity=Objects::class, mappedBy="updatedBy", orphanRemoval=false, cascade={"persist"})
     */
    private $objectsUpdated;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Libraries::class, mappedBy="createdBy")
     */
    private $libraries;

    /**
     * @ORM\OneToMany(targetEntity=Action::class, mappedBy="createdBy")
     */
    private $createdActions;

    /**
     * @ORM\OneToMany(targetEntity=Action::class, mappedBy="user")
     */
    private $actions;

    /**
     * @ORM\OneToMany(targetEntity=News::class, mappedBy="createdBy", orphanRemoval=true)
     */
    private $news;

    /**
     * @ORM\Column(type="json")
     */
    private $bookmark = [];

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;



    public function __construct()
    {
        $this->setUpdatedAt(new \DateTimeImmutable('now'));
        if ($this->getCreatedAt() === null) {
            $this->setCreatedAt(new \DateTimeImmutable('now'));
        }
        if ($this->getBookmark() === null) {
            $this->setBookmark([]);
        }
        if ($this->isIsActive() === null) {
            $this->setIsActive(1);
        }
        $this->objectsUpdated = new ArrayCollection();
        $this->libraries = new ArrayCollection();
        $this->actions = new ArrayCollection();
        $this->news = new ArrayCollection();
    }

    public function getUserIdentifier(): string
    {
        return $this->email;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getRoles(): array
    {
        return $this->roles;
    }

    public function setRoles(?array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getStatus(): ?Status
    {
        return $this->status;
    }

    public function setStatus(?Status $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getSalt(): ?string
    {
        return null;
    }

    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
//         $this->password = null;
    }

    public function getUsername(): ?string
    {
        return $this->getEmail();
    }

    public function __call($name, $arguments)
    {
//        return $this->getUserIdentifier();

    }

    /**
     * @return Collection<int, Objects>
     */
    public function getObjectsUpdated(): Collection
    {
        return $this->objectsUpdated;
    }

    public function addObjectsUpdated(Objects $objectsUpdated): self
    {
        if (!$this->objectsUpdated->contains($objectsUpdated)) {
            $this->objectsUpdated[] = $objectsUpdated;
            $objectsUpdated->setUpdatedBy($this);
        }

        return $this;
    }

    public function removeObjectsUpdated(Objects $objectsUpdated): self
    {
        if ($this->objectsUpdated->removeElement($objectsUpdated)) {
            // set the owning side to null (unless already changed)
            if ($objectsUpdated->getUpdatedBy() === $this) {
                $objectsUpdated->setUpdatedBy(null);
            }
        }

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

    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection<int, Libraries>
     */
    public function getLibraries(): Collection
    {
        return $this->libraries;
    }

    public function addLibrary(Libraries $library): self
    {
        if (!$this->libraries->contains($library)) {
            $this->libraries[] = $library;
            $library->setCreatedBy($this);
        }

        return $this;
    }

    public function removeLibrary(Libraries $library): self
    {
        if ($this->libraries->removeElement($library)) {
            // set the owning side to null (unless already changed)
            if ($library->getCreatedBy() === $this) {
                $library->setCreatedBy(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Action>
     */
    public function getCreatedActions(): Collection
    {
        return $this->createdActions;
    }

    public function addCreatedActions(Action $createdActions): self
    {
        if (!$this->createdActions->contains($createdActions)) {
            $this->createdActions[] = $createdActions;
            $createdActions->setCreatedBy($this);
        }

        return $this;
    }

    public function removeAction(Action $createdActions): self
    {
        if ($this->createdActions->removeElement($createdActions)) {
            // set the owning side to null (unless already changed)
            if ($createdActions->getCreatedBy() === $this) {
                $createdActions->setCreatedBy(null);
            }
        }

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
            $action->setUser($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, News>
     */
    public function getNews(): Collection
    {
        return $this->news;
    }

    public function addNews(News $news): self
    {
        if (!$this->news->contains($news)) {
            $this->news[] = $news;
            $news->setCreatedBy($this);
        }

        return $this;
    }

    public function removeNews(News $news): self
    {
        if ($this->news->removeElement($news)) {
            // set the owning side to null (unless already changed)
            if ($news->getCreatedBy() === $this) {
                $news->setCreatedBy(null);
            }
        }

        return $this;
    }

    public function getBookmark(): ?array
    {
        return $this->bookmark;
    }

    public function setBookmark(array $bookmark): self
    {
        $this->bookmark = $bookmark;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }



}
