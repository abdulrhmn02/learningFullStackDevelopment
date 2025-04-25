
const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {protect} = require('../middleware/authMiddleware')

const { registerUser, loginUser } = require('../controllers/authController')



router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/dashboard' , protect , (req , res) =>{
    res.json({message: `Hello user ${req.user}, you are authorized!`})
} )





module.exports = router;