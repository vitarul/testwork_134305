<?php

namespace App\Http\Requests;

class UserUpdateRequest extends AbstractBaseRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['sometimes', 'string', 'confirmed'],
        ];
    }

    public function getData(): array
    {
        return $this->validated();
    }
}
