<?php


namespace App\Repositories\All\Vehicles\Brands;


use App\Repositories\Base\BaseRepositoryInterface;

interface VehicleBrandInterface extends BaseRepositoryInterface
{
    /**
     * getBrands
     *
     * @return array
     */
    public function getBrands(): array;
}
