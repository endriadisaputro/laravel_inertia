<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => inertia('Home'));
Route::get('/dashboard', fn () => inertia('Dashboard'));

Route::resource('/users', UserController::class);
