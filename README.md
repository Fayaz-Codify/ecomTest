# E-Commerce App (Laravel API + React)

A simple full-stack e-commerce application built with a decoupled architecture.

---

## Tech Stack

- Backend: Laravel (REST API)  
- Frontend: React + Vite  
- Database: MySQL  
- HTTP Client: Axios  

---

## Features

- Product listing  
- Cart management  
- Checkout and order placement  
- Order confirmation  

---

## Project Structure

```
ecommerce/
├── backend/        # Laravel API
└── frontend/       # React (Vite)
```

---

## Backend Setup (Laravel)

1. Install PHP dependencies
```
composer install
```

2. Create environment file
```
cp .env.example .env
```

3. Update database credentials in `.env`:
```
DB_DATABASE=ecommerce
DB_USERNAME=root
DB_PASSWORD=
```

4. Generate application key
```
php artisan key:generate
```

5. Run migrations
```
php artisan migrate
```

6. Seed demo products
```
php artisan db:seed
```

7. Start Laravel server
```
php artisan serve
```

The backend API will run at: `http://127.0.0.1:8000`

---

## Backend API Routes

| Method | Endpoint      | Description       |
|--------|---------------|-----------------|
| GET    | /api/products | Get all products |
| POST   | /api/orders   | Place a new order |

---

## Frontend Setup (React + Vite)

1. Navigate to frontend folder
```
cd ../frontend
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```

The frontend React app will run at: `http://localhost:5173`  
Note: Make sure the Laravel server is running before starting the React app.

---

## Order Flow

1. Products are loaded from `/api/products`  
2. User adds items to the cart  
3. User enters name and email at checkout  
4. Order is sent to `/api/orders`  
5. Order confirmation displays:
   - Order ID
   - Total price
   - Ordered items  

---

## Database Tables

### products
| Column      | Type        |
|------------|-------------|
| id         | BigInt (PK) |
| name       | String      |
| description| Text        |
| price      | Decimal     |
| stock      | Integer     |

### orders
| Column         | Type        |
|---------------|------------|
| id            | BigInt (PK)|
| customer_name | String     |
| customer_email| String     |
| total         | Decimal    |

### order_items
| Column     | Type       |
|-----------|------------|
| id        | BigInt (PK)|
| order_id  | Foreign Key|
| product_id| Foreign Key|
| quantity  | Integer    |
| price     | Decimal    |

---

## Common Commands

- Clear Laravel cache
```
php artisan optimize:clear
```

- Re-run migrations (deletes all data)
```
php artisan migrate:fresh --seed
```

- Build frontend for production
```
npm run build
```

---

## Author

Fayaz Ahmad  
BS Computer Science | Laravel and React Developer

