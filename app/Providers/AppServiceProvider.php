<?php

namespace App\Providers;

use App\Repositories\All\Users\UsersInterface;
use App\Repositories\All\Users\UsersRepository;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
          app()->bind(UsersInterface::class, UsersRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}
