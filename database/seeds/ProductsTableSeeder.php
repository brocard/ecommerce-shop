<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = factory(\App\Models\Product::class, 15)->create();

        $imageUrl = 'https://loremflickr.com/320/240';

        foreach ($products as $product) {
            $product->addMediaFromUrl($imageUrl)->toMediaCollection('images');
        }
    }
}
