const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000
   


mongoose.connect(process.env.MONGO_URI,)
.then(() => {
    console.log("mongodb Connected Successfully")
})
.catch(err => console.error("db connection error" , err)
  
);


//Middleware
app.use(express.json());

//Routes 
const taskRoutes = require('./routes/taskRoutes');
app.use('/tasks' , taskRoutes )


app.get('/' , (req , res ) => {
    res.send('Welcome to the API!');
})


app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });