<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();


        $roleAdmin = Role::create(['name' => 'admin']);

        $roleManager = Role::create(['name' => 'manager']);

        $roleDeveloper = Role::create(['name' => 'develop']);

        $user = User::factory()->create([
            'name' => 'Михаил',
            'email' => 'admin@mail.com',
            'password' => Hash::make('admin123'),
        ]);
        $user->assignRole($roleAdmin);


        $user = User::factory()->create([
            'name' => 'Евгений',
            'email' => 'manager@mail.com',
            'password' => Hash::make('manager123'),
        ]);
        $user->assignRole($roleManager);

        $user = User::factory()->create([
            'name' => 'Александр',
            'email' => 'developer@mail.com',
            'password' => Hash::make('developer123'),
        ]);
        $user->assignRole($roleDeveloper);

    }
}
