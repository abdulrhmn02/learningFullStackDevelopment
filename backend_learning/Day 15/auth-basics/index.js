const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv'); 


dotenv.config();// loads env files
const app = express();

// middleware to parse json
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use('/api/auth', authRoutes);


//mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));
const PORT = process.env.PORT || 3000;

//starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});