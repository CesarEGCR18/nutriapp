<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->double('peso');
            $table->double('grasa');
            $table->double('porcentajeGrasa');
            $table->double('agua');
            $table->double('musculo');
            $table->double('grasaVisceral');
            $table->double('proteina');
            $table->double('minerales');
            $table->double('pecho');
            $table->double('cintura');
            $table->double('cadera');
            $table->foreignId('idPaciente')->references('id')->on('patients');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
