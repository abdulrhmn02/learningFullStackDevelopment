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

//Home route

app.get('/home' , (req , res) => {
    res.send('Welcome to home Page');
})
//Contact Us Route 

app.get('/contactus' , (req , res)=>{
    const data = {name : 'abdul' , email : 'abdulrhmn4137@gmail'};
    res.json(data);
});


//about us route

app.get('/about' , (req , res)=>{
    res.send('Welcome to About Us Page')
})

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
