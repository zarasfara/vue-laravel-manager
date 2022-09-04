<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
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
        $this->call([
            RoleSeeder::class,
        ]);

         \App\Models\User::factory()
             ->count(1)
             ->create();

         \App\Models\User::factory()->create([
             'name' => 'admin',
             'role_id' => 1,
             'password' => bcrypt('admin123'),
         ]);
    }
}
