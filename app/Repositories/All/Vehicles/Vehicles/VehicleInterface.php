<?php


namespace App\Repositories\All\Vehicles\Vehicles;

use App\Models\Vehicle;
use App\Repositories\Base\BaseRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface VehicleInterface extends BaseRepositoryInterface
{
    /**
     * findLastVehicleByStockType
     *
     * @param  mixed $type
     * @return Vehicle
     */
    public function findLastVehicleByStockType($type): ?Vehicle;
    /**
     * getByTag
     *
     * @param  mixed $tagSlug
     * @param  mixed $limit
     * @return Collection
     */
    public function getByTag($tagSlug, $limit): ?Collection;
    /**
     * getColors
     *
     * @return array
     */
    public function getColors(): array;
    /**
     * getColors
     *
     * @return array
     */
    public function getYears(): array;
     /**
     * getModels
     *
     * @return array
     */
    public function getModels(): array;
    /**
     * filterPublic
     *
     * @param  mixed $filters
     * @return LengthAwarePaginator
     */
    public function filterPublic($filters): LengthAwarePaginator;
}
