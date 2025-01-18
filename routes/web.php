<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

require __DIR__.'/auth.php';

Route::group(['middleware' => 'auth'], function () {
    // Dashboard Routes
    Route::get('/', [HomeController::class, 'home'])->name('dashboard');

});