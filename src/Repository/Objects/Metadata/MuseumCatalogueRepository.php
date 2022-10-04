<?php

namespace App\Repository\Objects\Metadata;

use App\Entity\Objects\Metadata\MuseumCatalogue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MuseumCatalogue>
 *
 * @method MuseumCatalogue|null find($id, $lockMode = null, $lockVersion = null)
 * @method MuseumCatalogue|null findOneBy(array $criteria, array $orderBy = null)
 * @method MuseumCatalogue[]    findAll()
 * @method MuseumCatalogue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MuseumCatalogueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MuseumCatalogue::class);
    }

    public function add(MuseumCatalogue $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MuseumCatalogue $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MuseumCatalogue[] Returns an array of MuseumCatalogue objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MuseumCatalogue
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
