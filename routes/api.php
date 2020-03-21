<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->group(function () {
    Route::get('/products', 'ProductsController@index')->name('products.index');
    Route::get('/products/{product}', 'ProductsController@show')->name('products.show');
    Route::post('/products', 'ProductsController@create')->name('products.create');
    Route::post('/products/{product}', 'ProductsController@store')->name('products.store');

    Route::prefix('admin')->group( function (){
        Route::resource('users', 'UsersController', ['except' => ['create']]);
        Route::resource('products', 'ProductsController', ['except' => ['create']]);
    });

});
