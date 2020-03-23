<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

class Product extends Model implements HasMedia
{
    protected $fillable = ['name', 'description', 'price', 'status'];

    const ACTIVE = 1;
    const INACTIVE = 0;

    use HasMediaTrait;

    public function getImageUrl()
    {
        return $this->hasMedia()
            ? $this->getMedia()->first()->getUrl('thumb')
            : $this->getDefaultUrl();
    }

    public function getDefaultUrl()
    {
        return asset('images/default-store-350x350.jpg');
    }
}
