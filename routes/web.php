<?php

use App\Http\Controllers\Admin\AdminController;

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Public\PublicShopController;
use App\Http\Controllers\Seller\FoodMenu\FoodMenuController;
use App\Http\Controllers\Shop\ShopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/', [HomeController::class, 'home'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin/dashboard', [AdminController::class, 'index'])->name('admin.index');
    Route::get('/admin/dashboard/users/{id}/show', [AdminController::class, 'show'])->name('admin.show');
    Route::delete('/admin/dashboard/users/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');
    Route::patch('/admin/users/{id}', [AdminController::class, 'update'])->name('admin.users.update');



    Route::get('/admin/shops', [ShopController::class, 'index'])->name('shop.index');
    // Route::get('/admin/dashboard/users/{id}/show', [ShopController::class, 'show'])->name('shop.show');
    Route::delete('/admin/shops/{id}', [ShopController::class, 'destroy'])->name('shop.destroy');
    // Route::patch('/admin/users/{id}', [ShopController::class, 'update'])->name('shop.users.update');

    // Route::get('/user/shop/dashboard', [ShopController::class, 'index'])->name('shop.index');
    Route::get('/seller/shop/menu', [FoodMenuController::class, 'index'])->name('food.index');







    //  Route::post('/admin/shops/store', [ShopController::class, 'store'])->name('shops.store');
});

Route::post('/shops/save', [ShopController::class, 'save'])->middleware('auth')->name('shops.save');

Route::get('/shops/{id}', [PublicShopController::class, 'show'])->name('public.shop.index');


require __DIR__ . '/auth.php';
