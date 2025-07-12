<?php

namespace App\Http\Controllers\Admin;

use App\Enums\UserRoleEnum;
use App\Http\Controllers\Controller;
use App\Http\Traits\UtilityTrait;
use App\Repositories\All\Users\UsersInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminController extends Controller
{


    use UtilityTrait;
    public function __construct(
        protected UsersInterface $usersInterface,
    ) {

    }


    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $filters = $request->all(['searchParam', 'sortBy', 'sortDirection', 'rowPerPage', 'page']);
        $filters['sortBy'] ??= 'created_at';
        $filters['sortDirection'] ??= 'desc';
        $filters['rowPerPage'] ??= 20;
        $filters['status'] ??= null;
        $filters['role'] ??= UserRoleEnum::USER->value;


        return Inertia::render('Admin/All/Index', [
            'users' => $this->usersInterface->filter($filters),
            'filters' => $filters,
        ]);
    }




    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
