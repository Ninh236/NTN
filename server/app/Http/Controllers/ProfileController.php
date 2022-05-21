<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function getAll() {
        return Profile::all();
    }

    public function index() {}

    public function findByUsername($username) {
        return User::where('username', $username)->with('profile')->get();
    }

    public function search($username) {
        return User::where('username', 'LIKE', '%' . $username . '%')->with('profile')->get();
    }

    public function update(Request $request)
    {
        return $request;
        $profile = auth()->user()->profile->update();
        return $profile;
    }
}
