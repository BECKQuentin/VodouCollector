<?php

namespace App\Repository\Objects;

use App\Entity\Objects\Media\Videos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Videos|null find($id, $lockMode = null, $lockVersion = null)
 * @method Videos|null findOneBy(array $criteria, array $orderBy = null)
 * @method Videos[]    findAll()
 * @method Videos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Videos::class);
    }

    public function findAllVideosByObject($object)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.objects = :objects')
            ->setParameter('objects', $object)
            ->getQuery()
            ->getResult()
            ;
    }




}
