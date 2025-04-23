const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// // Register Route
// router.post('/register', async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Save user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User registered successfully" });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// // Login Route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     res.status(200).json({ message: "Login successful" });

//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });


// register route 

router.post('/register' , async (req , res)=>{
  try {
    const { username , email , password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser) return res.status(400).json({message : 'user already exists'});

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newUser = new User({ username , email , password : hashedPassword});
    await newUser.save();
    res.status(201).json({message: 'user registered successfully'})
  } catch (error) {
    res.status(400).json({error : error.message})
  }
} )



// login route 

router.post('/login' , async (req , res)=>{
  const { email , password} = req.body;
  try {
    const user = await User.findOne({email});
    if(!user) return res.status(404).json({message: ' User not found'})
      const isMatch = await bcrypt.compare(password , user.password);
    if(!isMatch) return res.status(200).json({message:'invalid credentials'})

      res.status(201).json({message: ' login succesfull'})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
} ) 



// reset password

router.post('/reset-password' , async (req , res)=>{
  try {
    const {email , newPassword} = req.body;
    
    const user = await User.findOne({email});
    if (!user) return res.status(404).json({message: 'User not found'});
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;

    await user.save();
    res.status(200).json({message: 'Password reset successfully'});

  } catch (error) {
    res.status(400).json({message : 'something went wrong please try again later'})
  }
})









module.exports = router;
