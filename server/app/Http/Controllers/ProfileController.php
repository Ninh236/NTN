<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show($user_id)
    {
        return Profile::where('user_id',  $user_id)->get();
    }

    public function update(ProfileRequest $request)
    {
        $profile = auth()->user()->profile->update([
            'first_name' => $request->first_name,
            'surname' => $request->surname,
            'last_name' => $request->last_name
        ]);
        return $profile;
    }

    public function search($user_id) {
        return Profile::where('user_id', $user_id)->get();
    }
}
