<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function () {
    Route::get('/products', 'ProductsController@index')->name('products.index');
    Route::get('/products/{product}', 'ProductsController@show')->name('products.show');
    Route::post('/products', 'ProductsController@create')->name('products.create');
    Route::post('/products/{product}', 'ProductsController@store')->name('products.store');

    Route::get('/users', 'UsersController@index')->name('users.index');
});
