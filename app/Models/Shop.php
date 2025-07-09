<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
