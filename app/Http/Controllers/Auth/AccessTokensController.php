<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;

class AccessTokensController extends Controller
{
    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    public function login(Request $request)
    {
        try {
            $response = $this->client->request('POST', config('services.passport.endpoint'), [
                'verify' => false,
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->input('username'),
                    'password' => $request->input('password'),
                ]
            ]);
            return $response->getBody();
        } catch (BadResponseException $e) {
            if ($e->getCode() === 400 ){
                return response()->json('Invalid Request. Please enter a username or a password', $e->getCode());
            } else if ($e->getCode() === 401) {
                return response()->json('Your Credentials are incorrect. Please try again', $e->getCode());
            }
            return response()->json('Someting went worng on the server.', $e->getCode());
        }
    }

    public function logout()
    {
        auth()->user()
            ->tokens
            ->each( function ($token, $key) {
                $token->delete();
            });

        return response()->json('', 200);
    }
}
