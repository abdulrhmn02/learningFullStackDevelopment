// const express = require('express')
// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const User = require('../models/User')

// const router = express.Router();



// // Register Route
// router.post('/register', async (req, res) => {
//     try {
//       const { username, email, password } = req.body;
  
//       const existingUser = await User.findOne({ email });
//       if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       const user = new User({ username, email, password: hashedPassword });
//       await user.save();
  
//       const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
//       res.status(201).json({
//         token,
//         user: { id: user._id, username: user.username, email: user.email }
//       });
//     } catch (err) {
//       res.status(500).json({ message: 'Server error' });
//     }
//   });
  


// // Login Route
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//     res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;





const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
