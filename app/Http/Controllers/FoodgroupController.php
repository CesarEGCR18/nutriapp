<?php

namespace App\Http\Controllers;

use App\Models\Foodgroup;
use App\Http\Requests\StoreFoodgroupRequest;
use App\Http\Requests\UpdateFoodgroupRequest;
use Inertia\Inertia;

class FoodgroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $foodGroups = Foodgroup::with('interchanges', 'detailPlans')->get();
        return Inertia::render('FoodGroups/Index', ['foodGroups' => $foodGroups]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFoodgroupRequest $request)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
        ]);

        Foodgroup::create($fields);
        return redirect('foodgroups');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFoodgroupRequest $request, Foodgroup $foodgroup)
    {
        $fields = $request->validate([
            'nombre' => 'required|string',
        ]);

        $foodgroup->update($fields);
        return redirect('foodgroups');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Foodgroup $foodgroup)
    {
        $foodgroup->delete();
        return redirect('foodgroups');
    }
}
