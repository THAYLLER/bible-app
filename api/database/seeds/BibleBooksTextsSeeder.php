<?php

use Illuminate\Database\Seeder;

class BibleBooksTextsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\BibleBooksTexts::class, 10)->create();
    }
}
