<?php


namespace App\Repositories\All\Vehicles\Media;

use App\Models\VehicleMedia;
use App\Repositories\Base\BaseRepository;

class VehicleMediaRepository extends BaseRepository implements VehicleMediaInterface
{
    /**
     * @var VehicleMedia
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  VehicleMedia  $model
     */
    public function __construct(VehicleMedia $model)
    {
        $this->model = $model;
    }
}
