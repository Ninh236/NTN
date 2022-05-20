<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $token = $user->createToken('main')->plainTextToken;

        $profile = Profile::create([
            'user_id' => $user->id,
            'first_name' => $request->first_name,
            'surname' => $request->surname,
            'last_name' => $request->last_name,
            'address' => $request->address,
        ]);

        return response([
            'user' => $user,
            'token' => $token,
            $profile
        ]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');
        $remember = !empty($request->remember);
        if (!Auth::attempt($credentials, $remember)) {
            return response([
                'error' => 'Invalid'
            ], 422);
        }

        $user = Auth::user();

        $token = $user->createToken('aaa');

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }

    public function logout() {
        Auth::user()->currentAccessToken()->delete();

        return response([
            "message" => "Logged out",
        ]);
    }
}
