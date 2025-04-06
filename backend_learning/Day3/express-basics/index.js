// index.js
const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to Express Day 3 🚀');
});

// Sample route
app.get('/hello', (req, res) => {
  res.send('Hello, this is a GET route!');
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
