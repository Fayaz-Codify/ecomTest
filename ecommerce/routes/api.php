<?php

use App\Http\Controllers\API\OrderController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


// -------------------- PRODUCTS --------------------

// Fetch all products
Route::get('/products', [ProductController::class, 'index']);

// Fetch single product details
Route::get('/products/{id}', [ProductController::class, 'show']);

// -------------------- ORDERS --------------------

// Create a new order
Route::post('/orders', [OrderController::class, 'store']);
