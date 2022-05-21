<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use App\Models\User;

class ProfileController extends Controller
{
    public function getAll() {
        return Profile::all();
    }

    public function findByUsername($username) {
        return User::where('username', $username)->with('profile')->get();
    }

    public function search($username) {
        return User::where('username', 'LIKE', '%' . $username . '%')->with('profile')->get();
    }

    public function update(ProfileRequest $request)
    {
        $profile = auth()->user()->profile->update(array_filter($request->all()));
        return $profile;
    }
}
