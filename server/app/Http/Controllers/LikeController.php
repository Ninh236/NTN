<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Http\Requests\StoreLikeRequest;
use App\Http\Requests\UpdateLikeRequest;

class LikeController extends Controller
{
    public function like($id) {
        $user = auth()->user();

        $like = Like::where([
            ['user_id', $user->id],
            ['post_id', $id]
        ])->first();

        if (!$like) {
            Like::create([
                'user_id'=> $user->id,
                'post_id'=> $id
            ]);
            return response([
                'message' => 'Liked.'
            ]);
        } else {
            $like->delete();
            return response([
                'message' => 'Unliked.'
            ]);
        }
    }
}
