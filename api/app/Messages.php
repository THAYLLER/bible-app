<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    protected $fillable = [
        'image',
        'title_br',
        'title_es',
        'description_br',
        'description_es',
    ];

    protected $guarded = [
        'id'
    ];
}
