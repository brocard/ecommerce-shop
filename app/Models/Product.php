<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Product extends Model
{
    use HasMediaTrait;

    public function getImageUrl()
    {
        return asset('images/default-store-350x350.jpg');
    }
}
