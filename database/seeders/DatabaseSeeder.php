<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([RoleSeeder::class,]);

        \App\Models\User::factory()->count(2)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@mail.com',
            'role_id' => 1,
            'password' => Hash::make('admin123'),
        ]);

        \App\Models\User::factory()->create([
            'name' => 'test',
            'email' => 'test@email.com',
            'role_id' => 3,
            'password' => Hash::make('testtest'),
        ]);

    }
}
