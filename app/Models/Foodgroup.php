<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foodgroup extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function interchanges() {
        return $this->hasMany('App\Models\Interchange', 'idGrupoComida');
    }

    public function detailPlans() {
        return $this->hasMany('App\Models\Detailplan', 'idGrupoComida');
    }
}
