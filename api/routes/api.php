<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Bible')->name('Bible.')->group(function() {

    Route::prefix('/books')->group(function() {

        Route::get('/', 'BibleBooksController@index')->name('index_books');
        Route::get('/{id}', 'BibleBooksController@show')->name('single_books');

        Route::post('/', 'BibleBooksController@store')->name('store_books');
        Route::put('/{id}', 'BibleBooksController@update')->name('update_books');

        Route::delete('/{id}', 'BibleBooksController@delete')->name('delete_books');
    });

    Route::prefix('/books/text')->group(function() {

        Route::get('/', 'BibleBooksTextsController@index')->name('index_booksText');
        Route::get('/{id}', 'BibleBooksTextsController@show')->name('single_booksText');

        Route::post('/', 'BibleBooksTextsController@store')->name('store_booksText');
        Route::put('/{id}', 'BibleBooksTextsController@update')->name('update_booksText');

        Route::delete('/{id}', 'BibleBooksTextsController@delete')->name('delete_booksText');
    });

    Route::prefix('/devotional')->group(function() {

        Route::get('/', 'DevotionalController@index')->name('index_devotional');
        Route::get('/{id}', 'DevotionalController@show')->name('single_devotional');

        Route::post('/', 'DevotionalController@store')->name('store_devotional');
        Route::put('/{id}', 'DevotionalController@update')->name('update_devotional');

        Route::delete('/{id}', 'DevotionalController@delete')->name('delete_devotional');
    });

    Route::prefix('/glossary')->group(function() {

        Route::get('/', 'GlossaryController@index')->name('index_glossary');
        Route::get('/{id}', 'GlossaryController@show')->name('single_glossary');

        Route::post('/', 'GlossaryController@store')->name('store_glossary');
        Route::put('/{id}', 'GlossaryController@update')->name('update_glossary');

        Route::delete('/{id}', 'GlossaryController@delete')->name('delete_glossary');
    });

    Route::prefix('/messages')->group(function() {

        Route::get('/', 'MessagesController@index')->name('index_messages');
        Route::get('/{id}', 'MessagesController@show')->name('single_messages');

        Route::post('/', 'MessagesController@store')->name('store_messages');
        Route::put('/{id}', 'MessagesController@update')->name('update_messages');

        Route::delete('/{id}', 'MessagesController@delete')->name('delete_messages');
    });
});
