<?php


namespace App\Repositories\All\CustomerBets;

use App\Enums\CustomerBetStatusEnum;
use App\Models\Bid;

use App\Repositories\Base\BaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class CustomerBetsRepository extends BaseRepository implements CustomerBetsInterface
{
    /**
     * @var Bid
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  Bid  $model
     */
    public function __construct(Bid $model)
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
        $query = $query->where(['status' => CustomerBetStatusEnum::PENDING->value]);
        return $query->paginate($filters['rowPerPage'])->appends($filters);
    }

    /**
     * similar
     *
     * @return Collection
     */
    public function similar(): Collection {
        return $this-> model->where(['status' => CustomerBetStatusEnum::PENDING->value])->inRandomOrder()->take(4)->get();
    }
}
