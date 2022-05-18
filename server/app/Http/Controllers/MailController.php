<?php

namespace App\Http\Controllers;

use App\Mail\NewUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function mail() {
        Mail::to('minhatlop5b@gmail.com')->send(new NewUser());
    }
}
