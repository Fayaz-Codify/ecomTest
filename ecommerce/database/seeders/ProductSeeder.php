<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        Product::create([
            'name' => 'Wireless Headphones',
            'description' => 'High-quality wireless headphones with noise cancellation.',
            'price' => 99.99,
            'stock' => 10
        ]);

        Product::create([
            'name' => 'Smart Watch',
            'description' => 'Smart watch with health tracking and notifications.',
            'price' => 149.99,
            'stock' => 15
        ]);

        Product::create([
            'name' => 'Gaming Mouse',
            'description' => 'Ergonomic gaming mouse with customizable buttons.',
            'price' => 49.99,
            'stock' => 20
        ]);

        Product::create([
            'name' => 'Laptop Backpack',
            'description' => 'Durable laptop backpack with multiple compartments.',
            'price' => 59.99,
            'stock' => 12
        ]);

        Product::create([
            'name' => 'Bluetooth Speaker',
            'description' => 'Portable Bluetooth speaker with powerful sound.',
            'price' => 79.99,
            'stock' => 18
        ]);
    }
}
