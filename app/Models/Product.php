<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\{HasMedia, HasMediaTrait};

class Product extends Model implements HasMedia
{
    use HasMediaTrait;

    protected $fillable = ['name', 'slug', 'description', 'price', 'status'];

    const ACTIVE = 1;
    const INACTIVE = 0;

    public function getImageUrl()
    {
        return $this->hasMedia() ? $this->getCustomMediaUrl() : $this->getDefaultUrl();
    }

    public function getDefaultUrl()
    {
        return asset('images/default-store-350x350.jpg');
    }

    public function getCustomMediaUrl()
    {
        return asset($this->getFirstMediaUrl());
    }
}
