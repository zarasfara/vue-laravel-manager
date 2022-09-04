<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            ]
        ];

        foreach ($roles as $role) {
            $role['created_at'] = now();
            $role['updated_at'] = now();

            DB::table('roles')->insert($role);

        }
    }
}
