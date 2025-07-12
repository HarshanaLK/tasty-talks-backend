<?php


namespace App\Repositories\All\Vehicles\Vehicles;

use App\Enums\VehicleStatusEnum;
use App\Models\Vehicle;
use App\Repositories\Base\BaseRepository;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class VehicleRepository extends BaseRepository implements VehicleInterface
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
    public function __construct(Vehicle $model)
    {
        $this->model = $model;
    }


    /**
     * findLastVehicleByStockType
     *
     * @param  mixed $type
     * @return Vehicle
     */
    public function findLastVehicleByStockType($type): ?Vehicle
    {
        return $this->model->where('stock_type', $type)->latest()->first();
    }


    /**
     * getByTag
     *
     * @param  mixed $tagSlug
     * @param  mixed $limit
     * @return Collection
     */
    public function getByTag($tagSlug, $limit): ?Collection
    {
        return $this->model->whereHas('tags', function ($query) use ($tagSlug) {
            $query->where('slug', $tagSlug);
        })->where('status', VehicleStatusEnum::Active->value)->limit($limit)->with(['brand', 'banner'])->get();
    }
    /**
     * getColors
     *
     * @return array
     */
    public function getColors(): array
    {
        return $this->model->select('color')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('color')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->color,
                    'name' => $item->color,
                    'count' => $item->count
                ];
            })
            ->toArray();
    }
    /**
     * getModels
     *
     * @return array
     */
    public function getModels(): array
    {
        return $this->model->select('name', 'brand_id')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('name', 'brand_id')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->name,
                    'name' => $item->name,
                    'count' => $item->count,
                    'brand' => $item->brand?->name
                ];
            })
            ->toArray();
    }
    /**
     * getYears
     *
     * @return array
     */
    public function getYears(): array
    {
        return $this->model->select('year')
            ->selectRaw('COUNT(*) as count')
            ->groupBy('year')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->year,
                    'name' => $item->year,
                    'count' => $item->count
                ];
            })
            ->toArray();
    }

    public function filterPublic($filters): LengthAwarePaginator
    {
        try {
            // Sanitize and set default values
            $filters = array_map('trim', (array) $filters);
            $filters = array_merge([
                'searchParam' => '',
                'sortBy' => 'created_at',
                'sortDirection' => 'desc',
                'perPage' => 28,
                'brand' => '',
                'model' => '',
                'fromYear' => '',
                'toYear' => '',
                'color' => '',
                'price' => '',
                'tag' => ''
            ], $filters);
            // Validate filters
            $this->validateFilters($filters);




            // Generate cache key
            $cacheKey = 'vehicles_' . md5(json_encode($filters));

            // return Cache::remember($cacheKey, now()->addMinutes(15), function () use ($filters) {
            $query = $this->model->query();


            // **Filter only active vehicles**
            $query->where('status', VehicleStatusEnum::Active->value);


            // Apply search filter
            if (!empty($filters['searchParam'])) {
                $searchTerm = '%' . $filters['searchParam'] . '%';
                $query->where(function (Builder $query) use ($searchTerm) {
                    $query->where('name', 'like', $searchTerm)
                        ->orWhere('stock_id', 'like', $searchTerm)
                        ->orWhere('description', 'like', $searchTerm)
                        ->orWhere('color', 'like', $searchTerm)
                        ->orWhere('year', 'like', $searchTerm)
                        ->orWhereHas('brand', function ($q) use ($searchTerm) {
                            $q->where('name', 'like', $searchTerm);
                        });
                });
            }

            // Apply brand filter
            if (!empty($filters['brand'])) {
                $query->whereHas('brand', function ($query) use ($filters) {
                    $query->where('name', $filters['brand']);
                });
            }

            // Apply model filter
            if (!empty($filters['model'])) {
                $query->where('name', $filters['model']);
            }

            // Apply year range filter
            if (!empty($filters['fromYear'])) {
                $query->where('year', '>=', $filters['fromYear']);
            }
            if (!empty($filters['toYear'])) {
                $query->where('year', '<=', $filters['toYear']);
            }

            // Apply color filter
            if (!empty($filters['color'])) {
                $query->where('color', $filters['color']);
            }

            // Apply price range filter
            if (!empty($filters['price'])) {
                $priceRange = explode('-', $filters['price']);
                if (count($priceRange) === 2) {
                    $query->whereBetween('price', [
                        (int)$priceRange[0],
                        (int)$priceRange[1]
                    ]);
                }
            }

            // Apply tag filter
            if (!empty($filters['tag'])) {
                $query->whereHas('tags', function ($query) use ($filters) {
                    $query->where('slug', $filters['tag']);
                });
            }

            // Eager load relationships
            $query->with(['brand', 'tags', 'images']);

            // Apply sorting
            return $query->orderBy($filters['sortBy'], $filters['sortDirection'])
                ->paginate($filters['perPage'])
                ->appends($filters);
            // });
        } catch (\Exception $e) {
            Log::error('Vehicle filter error: ' . $e->getMessage());
            throw new \Exception('Error filtering vehicles');
        }
    }
    private function validateFilters(array $filters): array
    {
        $rules = [
            'searchParam' => 'nullable|string|max:255',
            'sortBy' => 'in:created_at,price,year,name',
            'sortDirection' => 'in:asc,desc',
            'perPage' => 'integer|min:1|max:150',
            'brand' => 'nullable|string|max:255',
            'model' => 'nullable|string|max:255',
            'fromYear' => 'nullable|digits:4',
            'toYear' => 'nullable|digits:4',
            'color' => 'nullable|string|max:50',
            'price' => ['nullable', 'regex:/^\d+-\d+$/'],
            'tag' => 'nullable|string|max:255',
        ];

        return Validator::make($filters, $rules)->validate();
    }
}
