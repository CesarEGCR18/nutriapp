<?php

namespace App\Http\Controllers;

use App\Models\Patient;
use App\Http\Requests\StorePatientRequest;
use App\Http\Requests\UpdatePatientRequest;
use Inertia\Inertia;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $patients = Patient::get();
        return Inertia::render('Patients/Index', ['patients' => $patients]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePatientRequest $request)
    {
        $fields = $request->validate([
            'cedula' => 'required|integer',
            'nombre' => 'required|string',
            'apellidos' => 'required|string',
            'telefono' => 'required|string',
            'email' => 'required|string',
            'alergias' => 'required|string',
            'numeroPartos' => 'required|integer',
            'actividadFisica' => 'required|boolean',
            'ocupacion' => 'required|string',
            'medicamentos' => 'required|string',
            'consumoDrogas' => 'required|boolean',
            'comentario' => 'required|string'
        ]);

        Patient::create($fields);
        return redirect('patients');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePatientRequest $request, Patient $patient)
    {
        $fields = $request->validate([
            'cedula' => 'required|integer',
            'nombre' => 'required|string',
            'apellidos' => 'required|string',
            'telefono' => 'required|string',
            'email' => 'required|string',
            'alergias' => 'required|string',
            'numeroPartos' => 'required|integer',
            'actividadFisica' => 'required|boolean',
            'ocupacion' => 'required|string',
            'medicamentos' => 'required|string',
            'consumoDrogas' => 'required|boolean',
            'comentario' => 'required|string'
        ]);

        $patient->update($fields);
        return redirect('patients');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
        return redirect('patients');
    }
}
