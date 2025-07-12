<?php


namespace App\Repositories\All\CustomerBets;


use App\Repositories\Base\BaseRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface CustomerBetsInterface extends BaseRepositoryInterface
{
    /**
     * publicFilter
     *
     * @param  mixed $filters
     * @param  mixed $with
     * @return LengthAwarePaginator
     */
    public function publicFilter($filters, $with = []): LengthAwarePaginator;
    /**
     * similar
     *
     * @return Collection
     */
    public function similar(): Collection;
}
