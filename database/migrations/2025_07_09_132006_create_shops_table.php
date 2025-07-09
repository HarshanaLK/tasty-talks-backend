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
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->string('shop_name')->nullable();
            $table->string('shop_address')->nullable();
            $table->time('open_time')->nullable();
            $table->time('close_time')->nullable();
            $table->enum('shop_status', ['open', 'closed'])->default('closed');
            $table->text('description')->nullable();
            $table->float('rating', 2, 1)->nullable()->default(null);
            $table->string('logo')->nullable();
            $table->string('cover')->nullable();
            $table->string('location')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
