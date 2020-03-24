<?php

namespace App\Observers;

use App\Models\Product;
use Illuminate\Support\Str;

class ProductObserver
{
    /**
     * Handle the product "created" event.
     *
     * @param  Product  $product
     * @return void
     */
    public function creating(Product $product)
    {
        $product->slug = Str::slug($product->name);
    }

    /**
     * Handle the product "updated" event.
     *
     * @param  Product  $product
     * @return void
     */
    public function saving(Product $product)
    {
        $product->slug = Str::slug($product->name);
    }

    /**
     * Handle the product "deleted" event.
     *
     * @param  Product  $product
     * @return void
     */
    public function deleted(Product $product)
    {
        //
    }
}
