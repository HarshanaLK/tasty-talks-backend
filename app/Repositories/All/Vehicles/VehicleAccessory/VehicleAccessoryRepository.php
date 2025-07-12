<?php


namespace App\Repositories\All\Vehicles\VehicleAccessory;

use App\Models\Vehicle;
use App\Models\VehicleAccessory;
use App\Repositories\Base\BaseRepository;

class VehicleAccessoryRepository extends BaseRepository implements VehicleAccessoryInterface
{
    /**
     * @var Vehicle
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  Vehicle  $model
     */
    public function __construct(VehicleAccessory $model)
    {
        $this->model = $model;
    }

}
