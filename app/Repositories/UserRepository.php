<?php

namespace App\Repositories;

use App\User;

class UserRepository
{
    public function all()
    {
        return User::all();
    }

    public function findById($id)
    {
        return User::findOrFail($id);
    }
}
