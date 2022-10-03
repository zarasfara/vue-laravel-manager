<?php

namespace App\Http\Controllers;

use App\Models\User;
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
        $users = User::with('role')
            ->select('id','name', 'email', 'nickname', 'role_id', 'surname')
            ->get();
        return inertia('Users', compact('users'));
    }


    /**
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile(User $user)
    {
        return response()->json($user);
    }
}
