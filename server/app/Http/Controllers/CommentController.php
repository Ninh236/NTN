<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Post;
use function GuzzleHttp\Promise\all;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCommentRequest  $request
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCommentRequest  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCommentRequest $request, $post_id, $comment_id)
    {
        $comment = Comment::where([
            ['post_id', $post_id],
            ['user_id', auth()->user()->id],
            ['id', $comment_id]
        ])->update([
            'content' => $request->content
        ]);
        return $comment;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy($post_id, $comment_id)
    {
        return Comment::where([
            ['post_id', $post_id],
            ['user_id', auth()->user()->id],
            ['id', $comment_id]
        ])->delete();
    }
}
