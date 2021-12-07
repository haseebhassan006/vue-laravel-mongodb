<?php

namespace App\Http\Controllers\Frontend;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    public function index(){
        $user  = User::all();
        return view('home');
    }

    public function store(){
        $user = User::all();
        return response()->json($user);
    }
}
