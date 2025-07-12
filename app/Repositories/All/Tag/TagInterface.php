<?php


namespace App\Repositories\All\Tag;


use App\Repositories\Base\BaseRepositoryInterface;

interface TagInterface extends BaseRepositoryInterface
{
    /**
     * getBrands
     *
     * @return array
     */
    public function getTags(): array;
}
