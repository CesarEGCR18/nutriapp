<?php

namespace App\Http\Controllers;

use App\Models\Detailplan;
use App\Models\Foodgroup;
use App\Models\Mealtime;
use App\Models\Patient;
use App\Models\Plan;
use App\Http\Requests\StorePlanRequest;
use App\Http\Requests\UpdatePlanRequest;
use Inertia\Inertia;

class PlanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = Plan::with('patients')->get();
        $patients = Patient::get();
        $detailPlans = Detailplan::get();
        return Inertia::render('Plans/Index', ['plans' => $plans, 'patients' => $patients, 'detailPlans' => $detailPlans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
//        $plan = new Plan();
        $patients = Patient::get();
        $foodgroups = Foodgroup::get();
        $mealtimes = Mealtime::get();
        $plans = Plan::get();
        return Inertia::render('Plans/Create', ['patients' => $patients, 'foodgroups' => $foodgroups, 'mealtimes' => $mealtimes, 'plans' => $plans]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePlanRequest $request)
    {
        $fields = $request->validate([
            'fecha' => 'required|date',
            'peso' => 'required|numeric',
            'grasa' => 'required|numeric',
            'porcentajeGrasa' => 'required|numeric',
            'agua' => 'required|numeric',
            'musculo' => 'required|numeric',
            'grasaVisceral' => 'required|numeric',
            'proteina' => 'required|numeric',
            'minerales' => 'required|numeric',
            'pecho' => 'required|numeric',
            'cintura' => 'required|numeric',
            'cadera' => 'required|numeric',
            'idPaciente' => 'required|integer',
        ]);

        $plan = Plan::create($fields);

        foreach ($request->detalles as $detalle) {
            $detalle['idPlan'] = $plan->id;
            Detailplan::create($detalle);
        }

        return redirect('plans');
    }

    /**
     * Display the specified resource.
     */
    public function show(Plan $plan) {
        $plan = $plan->load('patients', 'detailPlans');
        $foodgroups = Foodgroup::get();
        $mealtimes = Mealtime::get();
        return Inertia::render('Plans/Show', ['plan' => $plan, 'foodgroups' => $foodgroups, 'mealtimes' => $mealtimes]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Plan $plan)
    {
        $patients = Patient::get();
        return Inertia::render('Plans/Edit', ['plan' => $plan, 'patients' => $patients]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePlanRequest $request, Plan $plan)
    {
        $fields = $request->validate([
            'fecha' => 'required|date',
            'peso' => 'required|numeric',
            'grasa' => 'required|numeric',
            'porcentajeGrasa' => 'required|numeric',
            'agua' => 'required|numeric',
            'musculo' => 'required|numeric',
            'grasaVisceral' => 'required|numeric',
            'proteina' => 'required|numeric',
            'minerales' => 'required|numeric',
            'pecho' => 'required|numeric',
            'cintura' => 'required|numeric',
            'cadera' => 'required|numeric',
            'idPaciente' => 'required|integer',
        ]);

        $plan->update($fields);
        return redirect('plans');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plan $plan)
    {
        $plan->delete();
        return redirect('plans');
    }
}
