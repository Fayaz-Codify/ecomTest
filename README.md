ecomTest

Assessment

E-Commerce App (Laravel API + React)

A simple full-stack e-commerce application built with:

Backend: Laravel (REST API)

Frontend: React + Vite

Database: MySQL

HTTP Client: Axios

Features include:

Product listing

Cart management

Checkout and order placement

Order confirmation

Project Structure
ecommerce/
├── backend/        # Laravel API
└── frontend/       # React (Vite)

Backend Setup (Laravel)
1. Install PHP dependencies
composer install

2. Create environment file
cp .env.example .env


Update .env database credentials:

DB_DATABASE=ecommerce
DB_USERNAME=root
DB_PASSWORD=

3. Generate application key
php artisan key:generate

4. Run migrations
php artisan migrate

5. Seed demo products
php artisan db:seed

6. Start server
php artisan serve


Laravel API will run at:
http://127.0.0.1:8000

Backend API Routes
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/orders	Place a new order
Frontend Setup (React + Vite)
1. Navigate to frontend
cd ../frontend

2. Install dependencies
npm install

3. Start development server
npm run dev


React app will run at:
http://localhost:5173

Make sure Laravel server is running before React.

Order Flow

Products load from /api/products

User adds items to cart

User enters name and email at checkout

Order sent to /api/orders

Confirmation displays:

Order ID

Total price

Ordered items

Database Tables
products

id

name

description

price

stock

orders

id

customer_name

customer_email

total

order_items

id

order_id

product_id

quantity

price

Common Commands
Clear Laravel cache
php artisan optimize:clear

Re-run migrations (deletes data)
php artisan migrate:fresh --seed

Build frontend for production
npm run build

Author

Fayaz Ahmad
BS Computer Science
Laravel and React Developer