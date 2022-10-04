<?php

namespace App\Repository\Objects;

use App\Entity\Objects\Media\Files;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Files|null find($id, $lockMode = null, $lockVersion = null)
 * @method Files|null findOneBy(array $criteria, array $orderBy = null)
 * @method Files[]    findAll()
 * @method Files[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FilesRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Files::class);
    }

    public function findAllFilesByObject($object)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.objects = :objects')
            ->setParameter('objects', $object)
            ->getQuery()
            ->getResult()
            ;
    }


}
