# Ahmad Book Store Backend

A MySQL backend server for managing customer details.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MySQL database:
   - Create a database named `bookstore`
   - Update `.env` file with your MySQL credentials

3. Run the server:
   ```
   npm start
   ```

   For development:
   ```
   npm run dev
   ```

## Railway Deployment

1. Create a Railway account at https://railway.app
2. Create a new project
3. Add a MySQL database service to your project
4. Connect your GitHub repository or upload the code
5. Railway will automatically detect the Node.js app and deploy it
6. The `DATABASE_URL` environment variable will be set automatically by Railway
7. Your app will be available at the provided Railway URL

## API Endpoints

### Authentication
- `POST /api/login` - Admin login

### Books
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book (admin)
- `PUT /api/books/:id` - Update book (admin)
- `DELETE /api/books/:id` - Delete book (admin)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders (admin)

## Users Schema

- `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
- `username` (VARCHAR(255), UNIQUE, NOT NULL)
- `password` (VARCHAR(255), NOT NULL)
- `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

## Books Schema

- `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
- `title` (VARCHAR(255), NOT NULL)
- `author` (VARCHAR(255), NOT NULL)
- `price` (DECIMAL(10,2), NOT NULL)
- `category` (VARCHAR(100))
- `imgSrc` (VARCHAR(500))
- `description` (TEXT)
- `created_at` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)

## Orders Schema

- `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
- `customer_name` (VARCHAR(255), NOT NULL)
- `customer_email` (VARCHAR(255), NOT NULL)
- `customer_address` (TEXT, NOT NULL)
- `customer_mobile` (VARCHAR(20), NOT NULL)
- `ordered_books` (JSON, NOT NULL)
- `total_amount` (DECIMAL(10,2), NOT NULL)
- `order_date` (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)