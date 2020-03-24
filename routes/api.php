<?php

use Illuminate\Http\Request;

Route::prefix('auth')->group( function () {
    Route::post('login', 'Auth\AccessTokensController@login')->name('login');
    Route::middleware('auth:api')->post('logout', 'Auth\AccessTokensController@logout');
});

Route::namespace('Api')->group(function () {
    Route::resource('users', 'UsersController', ['only' => ['show']]);
    Route::resource('products', 'ProductsController', ['only' => ['index', 'show']]);

    Route::middleware('auth:api')->group( function () {
        Route::get('/user', function (Request $request) { return $request->user(); });

        Route::resource('users', 'UsersController', ['except' => ['create', 'show']]);
        Route::resource('products', 'ProductsController', ['except' => ['create', 'index', 'show']]);

        Route::post('media/{product}', 'MediaController@store')->name('media.store');
    });
});


