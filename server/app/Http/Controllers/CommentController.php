<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use App\Models\Post;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreCommentRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommentRequest $request, $post_id)
    {
        $user = auth()->user();

        Post::findOrFail($post_id);

        return Comment::create([
            'content' => $request->content,
            'user_id' => $user->id,
            'post_id' => $post_id
        ]);
    }

    public function update(UpdateCommentRequest $request, $post_id, $comment_id)
    {
        $check = Comment::where([
            ['post_id', $post_id],
            ['user_id', auth()->user()->id],
            ['id', $comment_id]
        ])->update([
            'content' => $request->content
        ]);

        if (!$check) {
            abort(404, "Invalid");
        } else {
            abort(200, "Your comment is edited.");
        }
    }

    public function destroy($post_id, $comment_id)
    {
        $check = Comment::where([
            ['post_id', $post_id],
            ['user_id', auth()->user()->id],
            ['id', $comment_id]
        ])->delete();

        if (!$check) {
            abort(404, "Invalid");
        } else {
            abort(200, "Your comment is deleted.");
        }
    }
}
