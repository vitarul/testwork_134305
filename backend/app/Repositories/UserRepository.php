<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Builder;

class UserRepository
{
    public function getAll(): Builder
    {
        return User::query();
    }

    public function findById(int $id): ?User
    {
        return User::query()->find($id);
    }
}
