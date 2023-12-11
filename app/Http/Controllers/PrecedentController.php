<?php

namespace App\Http\Controllers;

use App\Models\Precedent;
use App\Http\Requests\StorePrecedentRequest;
use App\Http\Requests\UpdatePrecedentRequest;
use Inertia\Inertia;

class PrecedentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $precedents = Precedent::get();
        return Inertia::render('Precedent/Index', ['precedents' => $precedents]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePrecedentRequest $request)
    {
        $precedent = $request->validate([
            'descripcion' => 'required|string',
            'tipo' => 'required|string'
        ]);

        Precedent::create($fields);
        return redirect('precedents');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePrecedentRequest $request, Precedent $precedent)
    {
        $fields = $request->validate([
            'descripcion' => 'required|string',
            'tipo' => 'required|string'
        ]);

        Precedent::update($fields);
        return redirect('precedents');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Precedent $precedent)
    {
        $precedent->delete();
        return redirect('precedents');
    }
}
