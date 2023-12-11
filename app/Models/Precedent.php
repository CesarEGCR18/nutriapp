<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Precedent extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function patients() {
        return $this->belongsToMany(Patient::class, 'patients_precedents', 'idPrecedente', 'idPaciente');
    }
}
