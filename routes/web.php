<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DetailplanController;
use App\Http\Controllers\FoodGroupController;
use App\Http\Controllers\InterchangeController;
use App\Http\Controllers\MealtimeController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\PrecedentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('detailplans', DetailplanController::class);
    Route::resource('foodgroups', FoodGroupController::class);
    Route::resource('interchanges', InterchangeController::class);
    Route::resource('mealtimes', MealtimeController::class);
    Route::resource('patients', PatientController::class);
    Route::resource('plans', PlanController::class);
    Route::resource('precedents', PrecedentController::class);
});

require __DIR__.'/auth.php';
