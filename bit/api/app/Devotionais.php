<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Devotionais extends Model
{
    protected $fillable = [
        'title_br',
        'title_es',
        'description_br',
        'description_es',
        'day',
    ];

    protected $guarded = [
        'id'
    ];
}
