const User = require('../models/User'); 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
 
const registerUser = async (req , res ) =>{ 
    try {
        const { email , username , password } = req.body 
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({message : ' user already exists'})
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password , salt )
        const newUser = new User({ email , username , password : hashedPassword})
        await newUser.save();
        res.status(201).json({message: ' user registered successfully '})
    } catch (error) {
        res.status(400).json({message : message.error})
    }

}

const loginUser = async (req , res ) =>{
    try {
        const { email , password } = req.body 
       const user = await User.findOne({email})
       if(!user) return res.status(404).json({message : ' user not found'})
        const isMatch = await bcrypt.compare(password ,user.password )
       if(!isMatch) return res.status(400).json({message : "Invalid credentials"})

        const token = jwt.sign({id: user._id} , process.env.JWT_SECRET )
        res.status(200).json({message: "login successfull" , token})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}
 
module.exports={
    registerUser , loginUser
}
