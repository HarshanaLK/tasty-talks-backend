<?php


namespace App\Repositories\All\Shops;

use App\Models\Shop;
use App\Models\User;
use App\Repositories\Base\BaseRepository;

class ShopsRepository extends BaseRepository implements ShopsInterface
{
    /**
     * @var Shop
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  Shop  $model
     */
    public function __construct(Shop $model)
    {
        $this->model = $model;
    }
}
