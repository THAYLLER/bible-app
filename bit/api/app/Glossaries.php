<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Glossaries extends Model
{
    protected $fillable = [

        'words_br',
        'words_es',
        'description_br',
        'description_es',
    ];

    protected $guarded = [
        'id'
    ];
}
