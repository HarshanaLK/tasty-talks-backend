<?php


namespace App\Repositories\All\Tag;

use App\Models\Tag;
use App\Repositories\Base\BaseRepository;

class TagRepository extends BaseRepository implements TagInterface
{
    /**
     * @var Tag
     */
    protected $model;


    /**
     * BaseRepository constructor.
     *
     * @param  Tag  $model
     */
    public function __construct(Tag $model)
    {
        $this->model = $model;
    }
    /**
     * getBrands
     *
     * @return array
     */
    public function getTags(): array
    {
        return $this->model->withCount(['vehicles as count'])
            ->having('count', '>=', 1)
            ->get()
            ->toArray();
    }
}
