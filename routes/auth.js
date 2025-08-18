// auth.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const user = {username: 'Kamve', loggedIn: true};

router.get('/', (req, res) => {
    res.render('auth.ejs', {
        pageTitle: 'Login',
        isActive: true,
        pagePath: '/'
    });
});

router.post('/login', [
    body('username').notEmpty().withMessage('Username cannot be empty!'),
    body('password').notEmpty().withMessage('Password cannot be empty!')
], (req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        console.log(validation.array());
        return res.json({ success: false, status: 400, message: "One of the fields is empty!" });
    }
    const { username, password } = req.body;
    if (password === '123456') {
        user.username = username;
        user.loggedIn = true;
        return res.json({ success: true, status: 200, message: "Login successful" });
    } else {
        res.json({ success: false, status: 400, message: "Invalid credentials!" });
    }
});
router.post('/logout', (req, res) => {
    user.username = '';
    user.loggedIn = false;
    res.status(200).json({ success: true, message: "Logged out successfully" });
});

exports.routes = router;
exports.user = user;