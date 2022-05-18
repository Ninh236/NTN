<?php

use App\Http\Controllers\MailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/profile', [\App\Http\Controllers\ProfileController::class, 'index']);
Route::get('/profile/{id}', [\App\Http\Controllers\ProfileController::class, 'show']);
Route::post('/profile', [\App\Http\Controllers\ProfileController::class, 'store']);
Route::put('/profile/{id}', [\App\Http\Controllers\ProfileController::class, 'update']);
Route::delete('/profile/{id}', [\App\Http\Controllers\ProfileController::class, 'destroy']);

Route::post('/register', [\App\Http\Controllers\Auth\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login']);

// protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [\App\Http\Controllers\Auth\AuthController::class, 'logout']);
});
