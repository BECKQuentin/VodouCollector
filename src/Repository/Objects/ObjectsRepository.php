<?php

namespace App\Repository\Objects;

use App\Data\SearchData;
use App\Entity\Objects\Objects;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @method Objects|null find($id, $lockMode = null, $lockVersion = null)
 * @method Objects|null findOneBy(array $criteria, array $orderBy = null)
 * @method Objects[]    findAll()
 * @method Objects[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ObjectsRepository extends ServiceEntityRepository
{
    private PaginatorInterface $paginator;

    public function __construct(ManagerRegistry $registry, PaginatorInterface $paginator)
    {
        parent::__construct($registry, Objects::class);

        $this->paginator = $paginator;
    }

    /*Count Request*/
    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function countObjects() {
        return $this->createQueryBuilder('o')
            ->select('count(o.id)')
            ->getQuery()
            ->getSingleScalarResult();
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function countWhereIsLocated($location) {
        return $this->createQueryBuilder('o')
            ->where('o.location = '.$location)
            ->select('count(o.location)')
            ->getQuery()
            ->getSingleScalarResult();
    }
    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    public function countToFix() {
        return $this->createQueryBuilder('o')
            ->where('o.state >= 4')
            ->select('count(o.state)')
            ->getQuery()
            ->getSingleScalarResult();
    }


    /*Find Request*/
    public function findLatest() {
        return $this->createQueryBuilder('o')
            ->join('o.tags', 't')
            ->select('o, t')
            ->getQuery();
    }

    public function findMostViewed(): PaginationInterface
    {
        $query = $this->createQueryBuilder('o')
            ->select('o')
            ->getQuery();
        return $this->paginator->paginate(
            $query,
            1,
            8
        );
    }

    /////////SEARCH////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Find/search articles by title/content
    public function searchObjects(SearchData $searchData)
    {
        $query = $this
            ->createQueryBuilder('o')
//            ->select('c', 'o')
            ->leftjoin('o.categories', 'cat')
            ->leftjoin('o.subCategories', 'subCat')
            ->leftjoin('o.population', 'pop')
            ->leftjoin('o.origin', 'ori')
            ->leftjoin('o.gods', 'g')
        ;
        if(!empty($searchData->q)) {
            $query = $query
                ->orWhere('o.code LIKE :q')
                ->orWhere('o.title LIKE :q')
                ->orWhere('cat.name LIKE :q')
                ->orWhere('subCat.name LIKE :q')
                ->orWhere('pop.name LIKE :q')
                ->orWhere('ori.name LIKE :q')
                ->orWhere('g.name LIKE :q')
//                ->orWhere('o.relatedGods LIKE :q')
//                ->orWhere('o.materials LIKE :q')
                ->orWhere('o.description LIKE :q')
                ->orWhere('o.era LIKE :q')
//                ->orWhere('o.historicDate = :q')
                ->orWhere('o.historicDetail LIKE :q')
                ->orWhere('o.commentary LIKE :q')
                ->orWhere('o.stateCommentary LIKE :q')
//                ->orWhere('o.state LIKE :q')
                ->orWhere('o.remarks LIKE :q')
                ->setParameter('q', "%{$searchData->q}%");
        }

//        if(!empty($searchData->updatedBy)) {
//            $query = $query
//                ->select('user', 'u')
//                ->orWhere('u.')
//                ->andWhere('u.updatedBy == o.updatedBy')
//                ->setParameter('updatedBy', "%{$searchData->updatedBy}%");
//        }


        if(!empty($searchData->isBasemented)) {
            $query = $query
                ->andWhere('o.isBasemented = 1');
        }
        if(!empty($searchData->location)) {
            $query = $query
                ->select('location', 'o')
                ->join('o.location', 'location')
                ->andWhere('location.id IN (:location)')
                ->setParameter('location', $searchData->location);
        }


        if(!empty($searchData->categories)) {
            $query = $query
                ->select('categories', 'o')
                ->join('o.categories', 'categories')
                ->andWhere('categories.id IN (:categories)')
                ->setParameter('categories', $searchData->categories);
        }
        if(!empty($searchData->subCategories)) {
            $query = $query
                ->select('subCategories', 'o')
                ->join('o.subCategories', 'subCategories')
                ->andWhere('subCategories.id IN (:subCategories)')
                ->setParameter('subCategories', $searchData->subCategories);
        }
        if(!empty($searchData->gods)) {
            $query = $query
                ->select('gods', 'o')
                ->join('o.gods', 'gods')
                ->andWhere('gods.id IN (:gods)')
                ->setParameter('gods', $searchData->gods);
        }
        if(!empty($searchData->relatedGods)) {
            $query = $query
                ->select('relatedGods', 'o')
                ->join('o.relatedGods', 'relatedGods')
                ->andWhere('relatedGods.id IN (:relatedGods)')
                ->setParameter('relatedGods', $searchData->relatedGods);
        }
        if(!empty($searchData->population)) {
            $query = $query
                ->select('population', 'o')
                ->join('o.population', 'population')
                ->andWhere('population.id IN (:population)')
                ->setParameter('population', $searchData->population);
        }
        if(!empty($searchData->origin)) {
            $query = $query
                ->select('origin', 'o')
                ->join('o.origin', 'origin')
                ->andWhere('origin.id IN (:origin)')
                ->setParameter('origin', $searchData->origin);
        }
        if(!empty($searchData->materials)) {
            $query = $query
                ->select('materials', 'o')
                ->join('o.materials', 'materials')
                ->andWhere('materials.id IN (:materials)')
                ->setParameter('materials', $searchData->materials);
        }
        if(!empty($searchData->state)) {
            $query = $query
                ->select('state', 'o')
                ->join('o.state', 'state')
                ->andWhere('state.id IN (:state)')
                ->setParameter('state', $searchData->state);
        }
        if(!empty($searchData->floor)) {
            $query = $query
                ->select('floor', 'o')
                ->join('o.floor', 'floor')
                ->andWhere('floor.id IN (:floor)')
                ->setParameter('floor', $searchData->floor);
        }
        if(!empty($searchData->showcaseCode)) {
            $query = $query
                ->andWhere('o.showcaseCode LIKE :showcaseCode')
                ->setParameter('showcaseCode', $searchData->showcaseCode);
        }
        if(!empty($searchData->shelf)) {
            $query = $query
                ->andWhere('o.shelf LIKE :shelf')
                ->setParameter('shelf', $searchData->shelf);
        }


        //SORT
        if(!empty($searchData->isSortAlpha)) {
            $query = $query
                ->orderBy('o.title', 'ASC');
        }
        if(!empty($searchData->isSortAlphaReverse)) {
            $query = $query
                ->orderBy('o.title', 'DESC');
        }
        if(!empty($searchData->isSortNumeric)) {
            $query = $query
                ->orderBy('o.code', 'ASC');
        }
        if(!empty($searchData->isSortNumericReverse)) {
            $query = $query
                ->orderBy('o.code', 'DESC');
        }
        if(!empty($searchData->sortDateUpdate)) {
            $query = $query
                ->orderBy('o.updatedAt', 'DESC');
        }




        $query = $query->getQuery();

        return $query->getResult();

//        return $this->paginator->paginate(
//            $query,
//            $searchData->page,
//            8
//        );
    }


}
