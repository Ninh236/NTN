<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getMyPosts()
    {
        return auth()->user()->posts()->with('comments')->get();
    }

    public function store(StorePostRequest $request)
    {
        $files = $request->file('image');
        $path = $files->store('/images', 'public');

        auth()->user()->posts()->create([
            'image' => $path,
            'content' => $request->content
        ]);

        return response([
            'message' => 'Created new post success.'
        ], 201);
    }

    public function update(UpdatePostRequest $request, $id)
    {
        auth()->user()->posts()->where('id', $id)->update([
            'content' => $request->content
        ]);

        return response([
            'message' => 'Post is edited.'
        ], 201);
    }

    public function destroy($id)
    {
        $message = "Post is deleted success.";
        $status = 200;
        try {
            auth()->user()->posts()->findOrFail($id);
        } catch(ModelNotFoundException $e) {
            $message = "Post is invalid.";
            $status = 404;
        }

        auth()->user()->posts()->where('id', $id)->delete();

        return response([
            'message' => $message
        ], $status);
    }
}
