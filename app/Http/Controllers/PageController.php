<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function home()
    {
        Auth::loginUsingId(3);
        return inertia('Index');
    }

    public function login()
    {
        return inertia('Login');
    }

    public function logout()
    {
        Auth::logout();

        return redirect()->route('logout');
    }

    public function projects()
    {
        return inertia('Projects');
    }

    /**
     * @return \Inertia\Response|\Inertia\ResponseFactory
     */
    public function users(): \Inertia\Response|\Inertia\ResponseFactory
    {
        return inertia('Users');
    }
}
