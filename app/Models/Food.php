<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
   use HasFactory;

       protected $table = 'foods';

    protected $fillable = [
        'shop_id',
        'category_id',
        'category_name',
        'category_description',
        'meal',
        'price',
        'food_image',
        'status',
    ];

    /**
     * Relationships
     */
    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    public function category()
    {
        return $this->belongsTo(FoodCategory::class, 'category_id');
    }
}
