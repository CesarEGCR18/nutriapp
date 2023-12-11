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
        Schema::create('detailplans', function (Blueprint $table) {
            $table->id();
            $table->double('cantidad');
            $table->string('descripcion');
            $table->foreignId('idTiempoComida')->references('id')->on('mealtimes');
            $table->foreignId('idGrupoComida')->references('id')->on('foodgroups');
            $table->foreignId('idPlan')->references('id')->on('plans')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detailplans');
    }
};
