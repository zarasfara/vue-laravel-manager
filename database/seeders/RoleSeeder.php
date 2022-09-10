<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roles = [
            [
                'title' => 'admin',
            ],
            [
                'title' => 'manager',
            ],
            [
                'title' => 'developer',
            ]
        ];

        foreach ($roles as $role) {
            $role['created_at'] = now();
            $role['updated_at'] = now();
            DB::table('roles')->insert($role);

        }
    }
}
