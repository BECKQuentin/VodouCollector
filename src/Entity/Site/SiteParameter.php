<?php

namespace App\Entity\Site;

use App\Repository\Site\SiteParameterRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SiteParameterRepository::class)
 */
class SiteParameter
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $limitActionLog;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $itemsByPage;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLimitActionLog(): ?int
    {
        return $this->limitActionLog;
    }

    public function setLimitActionLog(?int $limitActionLog): self
    {
        $this->limitActionLog = $limitActionLog;

        return $this;
    }

    public function getItemsByPage(): ?int
    {
        return $this->itemsByPage;
    }

    public function setItemsByPage(?int $itemsByPage): self
    {
        $this->itemsByPage = $itemsByPage;

        return $this;
    }
}
