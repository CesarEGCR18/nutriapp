<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interchange extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function foodGroups() {
        return $this->belongsTo('App\Models\FoodGroup', 'idGrupoComida');
    }
}
