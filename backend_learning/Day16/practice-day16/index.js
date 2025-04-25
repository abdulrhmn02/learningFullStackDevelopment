const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes')
const jwt = require('jsonwebtoken')


dotenv.config();

const app = express(); 

app.use(express.json());

app.get('/' , (req , res)=>{
    res.send("hello from fucking server")
})

app.use('/api/auth', authRoutes);



const PORT =  process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Mongodb Connected Successfully');
   app.listen(PORT , ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
   })
})
.catch((err) => {
    console.error('Connection error:', err.message);
  });
