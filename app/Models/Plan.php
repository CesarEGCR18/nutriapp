<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function patients() {
        return $this->belongsTo('App\Models\Patient', 'idPaciente');
    }

    public function detailPlans() {
        return $this->hasMany('App\Models\Detailplan', 'idPlan');
    }
}
