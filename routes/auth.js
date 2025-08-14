// auth.js

const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

const user = {username: '', loggedIn: false};

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
        return res.redirect('/');
    }
    const { username, password } = req.body;
    if (password === '123456') {
        user.username = username;
        user.loggedIn = true;
        return res.redirect('/dashboard');
    }
    console.log("Incorrect password");
    res.redirect('/');
})

exports.routes = router;
exports.user = user;