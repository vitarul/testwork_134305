<?php

namespace App\Services;

use App\Models\User;

class UserHandler
{
    public function create(array $data): User
    {
        $user = new User([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $user->save();

        return $user;
    }

    public function update(User $user, array $data): User
    {
        $user->name = $data['name'];
        $user->email = $data['email'];

        if (isset($data['password'])) {
            $user->password = bcrypt($data['password']);
        }

        $user->save();

        return $user;
    }

    public function delete(User $user): ?bool
    {
        return $user->delete();
    }
}
