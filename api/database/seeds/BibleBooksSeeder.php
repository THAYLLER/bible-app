<?php

use Illuminate\Database\Seeder;

class BibleBooksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\BibleBooks::class, 10)->create();
    }
}
