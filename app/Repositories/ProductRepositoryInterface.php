<?php

namespace App\Repositories;

interface ProductRepositoryInterface
{
    public function all();

    public function findById($id);

    public function findBySlug($slug);

    public function delete($id);
}
