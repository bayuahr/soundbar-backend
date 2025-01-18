<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function home(Request $request)
    {
        $data['assets'] = ['chart', 'animation'];
        return view('dashboards.dashboard', $data);
    }

}
