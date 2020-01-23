<?php

use Illuminate\Database\Seeder;

class DevotionalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Devotional::class, 10)->create();
    }
}
