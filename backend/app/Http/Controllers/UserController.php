<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\User;
use App\Repositories\UserRepository;
use App\Services\UserHandler;
use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    public function __construct(
        private UserRepository $userRepository,
        private UserHandler $userHandler,
    ) {}

    public function index(): JsonResponse
    {
        $users = $this->userRepository->getAll();

        return response()->json($users->paginate());
    }

    public function store(UserStoreRequest $request): JsonResponse
    {
        $user = $this->userHandler->create($request->getData());

        return response()->json($user, 201);
    }

    public function edit(User $user): JsonResponse
    {
        return response()->json($user);
    }

    public function update(User $user, UserUpdateRequest $request): JsonResponse
    {
        $user = $this->userHandler->update($user, $request->getData());

        return response()->json($user);
    }

    public function delete(User $user): JsonResponse
    {
        $this->userHandler->delete($user);

        return response()->json();
    }
}
