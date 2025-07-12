<?php


namespace App\Repositories\All\Address;


use App\Models\UserAddress;
use App\Repositories\Base\BaseRepository;

class  AddressRepository extends BaseRepository implements AddressInterface
{
    /**
     * @var UserAddress
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  UserAddress  $model
     */
    public function __construct(UserAddress $model)
    {
        $this->model = $model;
    }
}
