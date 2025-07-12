<?php

namespace App\Repositories\All\Vehicles\Brands;

use App\Models\VehicleBrand;
use App\Repositories\Base\BaseRepository;

class VehicleBrandRepository extends BaseRepository implements VehicleBrandInterface
{
    /**
     * @var VehicleBrand
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  VehicleBrand  $model
     */
    public function __construct(VehicleBrand $model)
    {
        $this->model = $model;
    }
    
    /**
     * getBrands
     *
     * @return array
     */
    public function getBrands(): array
    {
        return $this->model->where('status', 'active')
            ->withCount(['vehicles as count'])
            ->get()
            ->toArray();
    }
}
