<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detailplan extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function mealtimes() {
        return $this->belongsTo('App\Models\Mealtime', 'idTiempoComida');
    }

    public function foodgroups() {
        return $this->belongsTo('App\Models\Foodgroup', 'idGrupoComida');
    }

    public function plans() {
        return $this->belongsTo('App\Models\Plan', 'idPlan');
    }
}
