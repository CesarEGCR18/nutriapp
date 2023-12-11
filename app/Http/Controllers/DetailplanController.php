<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDetailplanRequest;
use App\Http\Requests\UpdateDetailplanRequest;
use App\Models\Detailplan;
use App\Models\Foodgroup;
use App\Models\Mealtime;
use App\Models\Plan;
use Inertia\Inertia;

class DetailplanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $detailPlans = Detailplan::with('foodgroups', 'mealtimes', 'plans.patients')->get();
        $foodGroups = Foodgroup::get();
        $mealTimes = Mealtime::get();
        $plans = Plan::with('patients')->get();
        return Inertia::render('DetailPlans/Index', ['detailplans' => $detailPlans, 'foodgroups' => $foodGroups, 'mealtimes' => $mealTimes, 'plans' => $plans]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDetailplanRequest $request)
    {
        $fields = $request->validate([
            'cantidad' => 'required|numeric',
            'descripcion' => 'required|string',
            'idGrupoComida' => 'required|integer',
            'idTiempoComida' => 'required|integer',
            'idPlan' => 'required|integer',
        ]);

        Detailplan::create($fields);
        return redirect('detailplans');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDetailplanRequest $request, Detailplan $detailplan)
    {
        $fields = $request->validate([
            'cantidad' => 'required|numeric',
            'descripcion' => 'required|string',
            'idGrupoComida' => 'required|integer',
            'idTiempoComida' => 'required|integer',
            'idPlan' => 'required|integer',
        ]);

        $detailplan->update($fields);
        return redirect('detailplans');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Detailplan $detailplan)
    {
        $detailplan->delete();
        return redirect('detailplans');
    }
}
