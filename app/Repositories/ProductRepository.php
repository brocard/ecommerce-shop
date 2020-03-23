<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository implements ProductRepositoryInterface
{
    public function all()
    {
        return Product::with('media')
            ->where('status', Product::ACTIVE)
            ->get();
    }

    public function findById($productId)
    {
        return Product::findOrFail($productId);
    }

    public function findBySlug($slug)
    {
        return Product::where('slug', $slug)->first();
    }

    public function delete($productId)
    {
        return Product::findOrFail($productId)->delete();
    }
}
