<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function home()
    {
        return view('pages.index');
    }

    public function login()
    {
        return view('pages.login');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('logout');
    }

    public function projects()
    {
        return view('pages.projects');
    }
}
