<?php

namespace App\Http\Controllers;

use App\Models\Mealtime;
use App\Http\Requests\StoreMealtimeRequest;
use App\Http\Requests\UpdateMealtimeRequest;
use Inertia\Inertia;
class MealtimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mealtimes = Mealtime::with('detailPlans')->get();
        return Inertia::render('MealTimes/Index', ['mealtimes' => $mealtimes]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMealtimeRequest $request)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
        ]);

        Mealtime::create($fields);
        return redirect('mealtimes');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMealtimeRequest $request, Mealtime $mealtime)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
        ]);

        $mealtime->update($fields);
        return redirect('mealtimes');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mealtime $mealtime)
    {
        $mealtime->delete();
        return redirect('mealtimes');
    }
}
