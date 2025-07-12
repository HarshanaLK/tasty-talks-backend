<?php

namespace App\Models;

use App\Enums\UserRoleEnum;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Carbon\Carbon;

class Shop extends Model
{

    use HasFactory;
    protected $fillable = [
        'user_id',
        'shop_name',
        'shop_address',
        'open_time',
        'close_time',
        'shop_status',
        'description',
        'rating',
        'logo',
        'cover',
        'location',
    ];



    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
        ];
    }

    protected $appends = [
        'created_at_human',
        'open_time_formatted',
        'close_time_formatted',
    ];
    /**
     * scopeOrderByColumn
     *
     * @param  mixed $query
     * @param  mixed $column
     * @param  mixed $direction
     * @return void
     */
    public function scopeOrderByColumn($query, $column, $direction = 'asc')
    {
        $query->orderBy($column, $direction);
    }
    /**
     * scopeFilter
     *
     * @param  mixed $query
     * @param  mixed $filters
     * @return void
     */
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['searchParam'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->Where('shop_name', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        });
    }
    /**
     * @return [type]
     */
    public function getCreatedAtHumanAttribute()
    {
        return Carbon::parse($this->created_at)->format('M d, Y \a\t g:i A');
    }

    public function getOpenTimeFormattedAttribute()
    {
        return Carbon::parse($this->open_time)->format('g:i A');
    }

    public function getCloseTimeFormattedAttribute()
    {
        return Carbon::parse($this->close_time)->format('g:i A');
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
