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





Route::post('/register', [\App\Http\Controllers\Auth\AuthController::class, 'register']);
Route::post('/login', [\App\Http\Controllers\Auth\AuthController::class, 'login']);

// protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [\App\Http\Controllers\Auth\AuthController::class, 'logout']);

    //************ profile
    // get all user's profile
    Route::get('/profiles/all', [\App\Http\Controllers\ProfileController::class, 'getAll']);
    // search by username
    Route::get('/profile/search/{username}', [\App\Http\Controllers\ProfileController::class, 'search']);
    // get by username
    Route::get('/profile/get/{username}', [\App\Http\Controllers\ProfileController::class, 'findByUsername']);
    // get by id
    Route::get('/profile/getid/{id}', [\App\Http\Controllers\ProfileController::class, 'findById']);
    // update
    Route::put('/profile/update', [\App\Http\Controllers\ProfileController::class, 'update']);

    //************ post
    // create new post
    Route::post('/post/create', [\App\Http\Controllers\PostController::class, 'store']);
    // edit caption
    Route::put('/post/edit/{post_id}', [\App\Http\Controllers\PostController::class, 'update']);
    // delete post
    Route::delete('/post/edit/{post_id}', [\App\Http\Controllers\PostController::class, 'destroy']);
    // get my posts
    Route::get('/post/{user_id}', [\App\Http\Controllers\PostController::class, 'getPosts']);
    // get by id
    Route::get('/post/find/{id}', [\App\Http\Controllers\PostController::class, 'findPostById']);
    // paginating
    Route::get('/post/get/all', [\App\Http\Controllers\PostController::class, 'getAll']);
    // find by hashtag
    Route::get('post/get/tags/{hashtag}', [\App\Http\Controllers\PostController::class, 'findPostByTag']);
    // get cmt's post
    Route::get('post/get/comments/{id}', [\App\Http\Controllers\PostController::class, 'getCommentsOfPost']);

    //************ comment
    Route::post('/comments/{post_id}', [\App\Http\Controllers\CommentController::class, 'store']);
    Route::put('/comment/edit/{post_id}/{comment_id}', [\App\Http\Controllers\CommentController::class, 'update']);
    Route::delete('/comment/edit/{post_id}/{comment_id}', [\App\Http\Controllers\CommentController::class, 'destroy']);


    //************ like
    Route::post('/like/{post_id}', [\App\Http\Controllers\LikeController::class, 'like']);
});
