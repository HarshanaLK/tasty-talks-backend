<?php


namespace App\Repositories\All\Orders;

use App\Enums\OrderStatusEnum;
use App\Models\Order;
use App\Models\ProjectRepositoryUser;
use App\Models\Repository;
use App\Repositories\All\Orders\OrderInterface;
use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class OrderRepository extends BaseRepository implements OrderInterface
{
    /**
     * @var Order
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  Order  $model
     */
    public function __construct(Order $model)
    {
        $this->model = $model;
    }

    /**
     * publicFilter
     *
     * @param  mixed $filters
     * @param  mixed $with
     * @return LengthAwarePaginator
     */
    public function publicFilter($filters, $with = []): LengthAwarePaginator
    {
        $query = $this->model->filter($filters)->orderByColumn($filters['sortBy'], $filters['sortDirection']);
        if (count($with) > 0) {
            $query = $query->with($with);
        }
        $query = $query->where(['status' => OrderStatusEnum::Pending->value]);
        return $query->paginate($filters['rowPerPage'])->appends($filters);
    }

    /**
     * similar
     *
     * @return Collection
     */
    public function similar(): Collection {
        return $this-> model->where(['status' => OrderStatusEnum::Pending->value])->inRandomOrder()->take(4)->get();
    }
}
