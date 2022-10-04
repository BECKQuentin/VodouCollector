<?php

namespace App\Repository\Objects\Metadata;

use App\Entity\Objects\Metadata\ExpositionLocation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ExpositionLocation>
 *
 * @method ExpositionLocation|null find($id, $lockMode = null, $lockVersion = null)
 * @method ExpositionLocation|null findOneBy(array $criteria, array $orderBy = null)
 * @method ExpositionLocation[]    findAll()
 * @method ExpositionLocation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ExpositionLocationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ExpositionLocation::class);
    }

    public function add(ExpositionLocation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ExpositionLocation $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ExpositionLocation[] Returns an array of ExpositionLocation objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ExpositionLocation
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
