<?php

namespace App\Repository\Objects;

use App\Entity\Objects\Metadata\Gods;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Gods|null find($id, $lockMode = null, $lockVersion = null)
 * @method Gods|null findOneBy(array $criteria, array $orderBy = null)
 * @method Gods[]    findAll()
 * @method Gods[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GodsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Gods::class);
    }

    // /**
    //  * @return Gods[] Returns an array of Gods objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Gods
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
