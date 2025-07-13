<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Enums\UserRoleEnum;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Carbon\Carbon;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'role',
        'avatar',
        'id_number',
        'address',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
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
            'password' => 'hashed',
            'role' => UserRoleEnum::class
        ];
    }

    protected $appends = [
        'name',
        'created_at_human'
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
                $query->Where('first_name', 'like', "%$search%")
                    ->orWhere('last_name', 'like', "%$search%")
                    ->orWhere('id', 'like', "%$search%");
            });
        })->when($filters['trashed'] ?? null, function ($query, $trashed) {
            if ($trashed === 'with') {
                $query->withTrashed();
            } elseif ($trashed === 'only') {
                $query->onlyTrashed();
            }
        })->when($filters['role'] ?? null, function ($query, $role) {
            $query->where('role', $role);
        });
    }
    /**
     * @return [type]
     */
    public function getCreatedAtHumanAttribute()
    {
        return Carbon::parse($this->created_at)->format('M d, Y \a\t g:i A');
    }
    /**
     * getNameHumanAttribute
     *
     * @return string
     */
    public function getNameAttribute(): string
    {
        $firstName = ucfirst(strtolower($this->first_name));
        $lastName = ucfirst(strtolower($this->last_name));
        return "$firstName $lastName";
    }

    public function shops()
    {
        return $this->hasOne(Shop::class);
    }
}
