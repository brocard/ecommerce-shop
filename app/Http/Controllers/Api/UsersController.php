<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Repositories\UserRepositoryInterface;

class UsersController extends Controller
{
    protected $user;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->user = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\JsonResource
     */
    public function index()
    {
        return UserResource::collection(User::all());
    }

    public function store(Request $request)
    {
        $data = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
        ];

        validator($data, [
            'name' => 'required',
            'email' => 'required|email'
        ])->validate();

        $entry = User::create($data);

        return response()->json(['entry' => $entry,]);
    }

    public function show($id)
    {
        $entry = $this->user->findById($id);

        return response()->json(['entry' => $entry]);
    }

    public function update(Request $request, $id)
    {
        $entry = $this->user->findById($id);

        $entry->update($request->all(['name', 'email']));

        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        $this->user->delete($id);

        return response()->json(['success' => true], 200);
    }
}
