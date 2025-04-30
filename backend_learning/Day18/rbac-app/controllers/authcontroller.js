const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async ( req , res ) => {
    const { name , email , password , role } = req.body 
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({message : 'user already exists' })

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash( password , salt)

        const newUser = new User({ name , email , password : hashedPassword , role })
        await newUser.save();
        res.status(200).json({message : ' User registered successfully '})
    
   

    } catch (error) {
        res.status(400).json({message : error.message})
    }
}


const loginUser = async (req , res ) => {
    const { email , password } = req.body 
    try {
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({message: ' user not found '})
        
        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch) return res.status(400).json({message : ' invalid credentials '})

        // const token = jwt.sign({ id : user._id , role:user.role} , process.env.JWT_SECRET)
        // res.status(200).json({message : 'login successfull' , token})

        const accesstoken = jwt.sign({id : user._id , role : user.role} , process.env.JWT_SECRET , { expiresIn : '60s'})
        // const refreshToken = jwt.sign({ id : user._id} , process.env.REFRESH_TOKEN_SECRET , { expiresIn : '7d'})
        const refreshToken = jwt.sign({ id: user._id, role: user.role }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '120s' });

         res.cookie('refreshToken' , refreshToken , {
            httpOnly:true, 
            sameSite:'Strict', 
            maxAge:7 * 24 * 60 * 60 * 1000
         })

         res.status(200).json({ accesstoken , message : ' login successfull'})
    } catch (error) {
        res.status(400).json({message : error.message})
    }




}




module.exports = { 
    registerUser , loginUser
}