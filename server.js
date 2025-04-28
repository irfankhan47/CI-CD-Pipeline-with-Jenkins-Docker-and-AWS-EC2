const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like images and stylesheets)
app.use(express.static(path.join(__dirname, 'public')));

// Dummy data for menu items
const menu = [
  { id: 1, name: 'Pizza', price: 8.99 },
  { id: 2, name: 'Burger', price: 5.49 },
  { id: 3, name: 'Pasta', price: 7.99 },
  { id: 4, name: 'Salad', price: 4.49 },
  { id: 5, name: 'Soda', price: 1.99 }
];

// Routes
app.get('/', (req, res) => {
  res.render('home', { title: 'Food Delivery Service' });
});

app.get('/menu', (req, res) => {
  res.render('menu', { title: 'Menu - Food Delivery', menu });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us - Food Delivery' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us - Food Delivery' });
});

// Health check route (for pipeline monitoring)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Cart route (for adding items to the cart)
app.get('/cart', (req, res) => {
  // Simulate cart with session or a hardcoded list of items
  res.render('cart', { title: 'Your Cart - Food Delivery' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
