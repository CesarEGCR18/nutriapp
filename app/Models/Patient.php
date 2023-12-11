<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function plans() {
        return $this->hasMany('App\Models\Plan', 'idPaciente');
    }

    public function precedents() {
        return $this->belongsToMany(Precedent::class, 'patients_precedents', 'idPaciente', 'idPrecedente');
    }
}
