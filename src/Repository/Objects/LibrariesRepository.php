<?php

namespace App\Repository\Objects;

use App\Entity\Objects\Libraries;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Libraries|null find($id, $lockMode = null, $lockVersion = null)
 * @method Libraries|null findOneBy(array $criteria, array $orderBy = null)
 * @method Libraries[]    findAll()
 * @method Libraries[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LibrariesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Libraries::class);
    }

    // /**
    //  * @return Libraries[] Returns an array of Libraries objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Libraries
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
