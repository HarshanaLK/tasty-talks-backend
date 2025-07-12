<?php


namespace App\Repositories\All\Users;

use App\Models\User;
use App\Repositories\Base\BaseRepository;

class UsersRepository extends BaseRepository implements UsersInterface
{
    /**
     * @var User
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  User  $model
     */
    public function __construct(User $model)
    {
        $this->model = $model;
    }
}
