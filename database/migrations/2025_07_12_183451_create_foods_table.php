<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('foods', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_id')->nullable()->constrained('shops')->onDelete('cascade');
            $table->foreignId('category_id')->nullable()->constrained('food_categories')->onDelete('cascade');
            $table->string('category_name')->nullable();
            $table->text('category_description')->nullable();
            $table->enum('meal', ['breakfast', 'lunch', 'dinner', 'draft'])->default('draft');
            $table->decimal('price', 8, 2)->nullable();
            $table->string('food_image')->nullable();
            $table->enum('status', ['available', 'unavailable'])->default('available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('foods');
    }
};
