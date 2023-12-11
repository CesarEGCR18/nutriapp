<?php

namespace App\Http\Controllers;

use App\Models\Foodgroup;
use App\Models\Interchange;
use App\Http\Requests\StoreInterchangeRequest;
use App\Http\Requests\UpdateInterchangeRequest;
use Inertia\Inertia;

class InterchangeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $interchanges = Interchange::with('foodgroups')->get();
        $foodgroups = Foodgroup::get();
        return Inertia::render('Interchanges/Index', ['interchanges' => $interchanges, 'foodgroups' => $foodgroups]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInterchangeRequest $request)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
            'descripcion' => 'required|string',
            'idGrupoComida' => 'required|integer',
        ]);

        Interchange::create($fields);
        return redirect('interchanges');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInterchangeRequest $request, Interchange $interchange)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
            'descripcion' => 'required|string',
            'idGrupoComida' => 'required|integer',
        ]);

        $interchange->update($fields);
        return redirect('interchanges');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interchange $interchange)
    {
        $interchange->delete();
        return redirect('interchanges');
    }
}
