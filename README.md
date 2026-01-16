project:
  name: "E-Commerce App (Laravel API + React)"
  description: "A simple full-stack e-commerce application built with a decoupled architecture."
  tech_stack:
    backend: "Laravel (REST API)"
    frontend: "React + Vite"
    database: "MySQL"
    http_client: "Axios"
  features:
    - "Product listing"
    - "Cart management"
    - "Checkout and order placement"
    - "Order confirmation"

project_structure:
  - ecommerce/
    - backend: "Laravel API"
    - frontend: "React (Vite)"

backend_setup:
  steps:
    - step: "Install PHP dependencies"
      command: "composer install"
    - step: "Create environment file"
      command: "cp .env.example .env"
    - step: "Update database credentials"
      env_variables:
        DB_DATABASE: "ecommerce"
        DB_USERNAME: "root"
        DB_PASSWORD: ""
    - step: "Generate application key"
      command: "php artisan key:generate"
    - step: "Run migrations"
      command: "php artisan migrate"
    - step: "Seed demo products"
      command: "php artisan db:seed"
    - step: "Start Laravel server"
      command: "php artisan serve"
      note: "The backend API will run at http://127.0.0.1:8000"

backend_api_routes:
  - method: "GET"
    endpoint: "/api/products"
    description: "Get all products"
  - method: "POST"
    endpoint: "/api/orders"
    description: "Place a new order"

frontend_setup:
  steps:
    - step: "Navigate to frontend folder"
      command: "cd ../frontend"
    - step: "Install dependencies"
      command: "npm install"
    - step: "Start development server"
      command: "npm run dev"
      note: "React app will run at http://localhost:5173. Make sure Laravel server is running before starting React."

order_flow:
  - "Products load from /api/products"
  - "User adds items to cart"
  - "User enters name and email at checkout"
  - "Order sent to /api/orders"
  - "Confirmation displays order ID, total price, and ordered items"

database_tables:
  products:
    - column: "id"
      type: "BigInt (PK)"
    - column: "name"
      type: "String"
    - column: "description"
      type: "Text"
    - column: "price"
      type: "Decimal"
    - column: "stock"
      type: "Integer"

  orders:
    - column: "id"
      type: "BigInt (PK)"
    - column: "customer_name"
      type: "String"
    - column: "customer_email"
      type: "String"
    - column: "total"
      type: "Decimal"

  order_items:
    - column: "id"
      type: "BigInt (PK)"
    - column: "order_id"
      type: "Foreign Key"
    - column: "product_id"
      type: "Foreign Key"
    - column: "quantity"
      type: "Integer"
    - column: "price"
      type: "Decimal"

common_commands:
  - description: "Clear Laravel cache"
    command: "php artisan optimize:clear"
  - description: "Re-run migrations (deletes all data)"
    command: "php artisan migrate:fresh --seed"
  - description: "Build frontend for production"
    command: "npm run build"

author:
  name: "Fayaz Ahmad"
  degree: "BS Computer Science"
  role: "Laravel and React Developer"