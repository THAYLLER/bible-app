<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Devotional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devotional', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title_br');
            $table->string('title_es');
            $table->text('description_br');
            $table->text('description_es');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('devotional', function (Blueprint $table) {
            //
        });
    }
}
