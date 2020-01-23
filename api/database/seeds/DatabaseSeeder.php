<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(BibleBooksSeeder::class);
        $this->call(BibleBooksTextsSeeder::class);
        $this->call(DevotionalSeeder::class);
        $this->call(GlossarySeeder::class);
        $this->call(MessagesSeeder::class);
        $this->call(UserSeeder::class);
    }
}
