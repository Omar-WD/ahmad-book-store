# Ahmad Book Store
Welcome to Ahmad Book Store — a simple, responsive online bookstore web application built with React and Vite. This project showcases a modern UI using Tailwind CSS and supports features like browsing by category, searching books, and a basic cart system that persists items using `localStorage`.

---

## Project Description

Ahmad Book Store is an educational web app for browsing a curated list of books by category and author. It provides an interactive UI for searching and filtering, book detail cards, and a lightweight shopping cart which is persisted in the browser.

Key features:
- Browse books by category (Romance, Fantasy, Mystery, Historical)
- Search books by title or author
- Book grid with cover images, authors, categories, and price
- Add books to a cart which is saved in `localStorage`
- A shopping cart page with ordered (numbered) list view, quantity controls, item removal, and total price calculation

## Tech Stack

- React 19
- Vite for fast development build
- Tailwind CSS
- React Router v7

---

## Setup & Run (Local Development)

Requirements: Node 18+ and npm installed.

1. Clone the repository:

```bash
git clone https://github.com/ahmad-dev-code/ahmad-book-store.git
cd ahmad-book-store
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available on http://localhost:5173 (or the port shown in the terminal).



---

## Deploying to Netlify

To deploy on Netlify, connect your GitHub repository. Use the following settings:
- Build command: `npm run build`
- Publish directory: `dist`

If the site shows blank/white screen after deployment, check the browser console and Netlify build logs. Common fix: ensure asset paths are absolute (I use `/booksImgs/...` for files in `public/`), and Netlify publishes `dist/` as the root.

---

## Usage

Routes:
- `/` — Home
- `/books` — Books grid (supports search and category filters)
- `/books/:category` — Books grid filtered to a category
- `/shopping-cart` — Shopping cart page

How to use:
- Search for a book by typing its title or author in the search bar.
- Click “Add to Cart” to add the book (cart stores quantities if you add the same book multiple times).
- Visit the Cart page using the header link to review items, change quantities, or clear the cart.

---

## Screenshots


Home Screen

![Home](/public/screenshots/1.jpeg)

About

![About](/public/screenshots/2.jpeg)

Books Grid

![Books Grid](/public/screenshots/3.jpeg)

Contact

![Contact](/public/screenshots/4.jpeg)

Shopping Cart

![Shopping Cart](/public/screenshots/5.jpeg)

---

## Project Structure

- `src/` — React components and styles
	- `components/` — `Home.jsx`, `Books.jsx`, `Contact.jsx`, `About.jsx`, `Header.jsx`, `Footer.jsx`, `ShoppingCart.jsx`
- `public/` — static assets (book cover images and screenshots)
- `index.html` — application root
- `package.json` — scripts and dependencies


# React + Vite