<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BibleBooksTexts extends Model
{
    protected $fillable = [
        'bible_books_id',
        'chapter',
        'verse',
        'text_br',
        'text_es'
    ];

    protected $guarded = [
        'id'
    ];
}
