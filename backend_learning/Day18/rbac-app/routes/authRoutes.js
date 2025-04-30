const jwt = require('jsonwebtoken')
const express = require('express');
const router = express.Router();
const{registerUser , loginUser } = require('../controllers/authcontroller')
const authMiddleware = require('../middlewares/authmiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')


router.post('/register' , registerUser);
router.post('/login' , loginUser)

router.get('/dashboard' , authMiddleware , (req ,res) => {
    res.status(200).json({message : ' Welcome to the dashboard'})
})

router.get('/admin' , authMiddleware , roleMiddleware('admin') , (req , res)=> {
    res.status(200).json({message : ' Welcome to Admin panel'})
})


router.post('/refresh-token', (req, res) => {
    const token = req.cookies.refreshToken;

    if (!token) return res.status(401).json({ message: 'No refresh token provided' });

    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        const newAccessToken = jwt.sign(
            { id: decoded.id, role: decoded.role },
            process.env.JWT_SECRET
           
        );
        

        res.status(200).json({ accessToken: newAccessToken });


    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired refresh token' });
    }
});




router.post('/logout', (req, res) => {
    res.clearCookie('refreshToken', {
        httpOnly: true,
        sameSite: 'Strict',
        secure: true, // only if using HTTPS
    });

    res.status(200).json({ message: 'Logged out successfully' });
})

module.exports = router; 