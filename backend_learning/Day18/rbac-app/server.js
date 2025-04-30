const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-parser')


dotenv.config();
 const app = express(); 
  
app.use(express.json());
app.use(cookieParser());
connectDb();

app.get('/' , (req , res) => {
    res.send("Server is running")
})


app.use('/api/auth' , authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT , () =>{
    console.log(`Server is running on http://localhost:${3000}`)
} )
