<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {

    $name = $faker->text(25);

    return [
        'name' => $name,
        'slug' => \Illuminate\Support\Str::slug($name),
        'description' => $faker->realText(),
        'price' => $faker->randomFloat(2, 25, 1000)
    ];
});
