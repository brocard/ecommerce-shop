<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Repositories\ProductRepositoryInterface;

class ProductsController extends Controller
{
    private $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\JsonResource
     */
    public function index()
    {
        return ProductResource::collection($this->productRepository->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $data = [
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
        ];

        validator($data, [
            'name' => 'required',
            'email' => 'required|email'
        ])->validate();

        $entry = Product::create($data);

        return response()->json(['entry' => $entry,]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $entry = $this->productRepository->findById($id);

        return response()->json(['entry' => new ProductResource($entry)]);
    }

    public function update(Request $request, $id)
    {
        $entry = $this->productRepository->findById($id);

        $entry->name = $request->input('name');
        $entry->description = $request->input('description');
        $entry->price = $request->input('price');
        $entry->save();

        return response()->json(['entry' => new ProductResource($entry)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        $this->productRepository->delete($id);

        return response()->json(['success' => true], 200);
    }
}
