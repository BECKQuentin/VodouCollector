<?php

namespace App\Repository\Objects;

use App\Entity\Objects\Metadata\Floor;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Floor|null find($id, $lockMode = null, $lockVersion = null)
 * @method Floor|null findOneBy(array $criteria, array $orderBy = null)
 * @method Floor[]    findAll()
 * @method Floor[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FloorRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Floor::class);
    }

    // /**
    //  * @return Categories[] Returns an array of Categories objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Categories
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
