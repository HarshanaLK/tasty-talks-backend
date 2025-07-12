<?php


namespace App\Repositories\All\Inquiries;

use App\Models\Inquiry;
use App\Repositories\Base\BaseRepository;

class InquiriesRepository extends BaseRepository implements InquiriesInterface
{
    /**
     * @var Inquiry
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Inquiry  $model
     */
    public function __construct(Inquiry $model)
    {
        $this->model = $model;
    }
}
