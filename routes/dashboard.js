// tasks.js
const express = require('express'); //returns an express function:
const adminData = require('./admin.js');
const userData = require('./auth.js');
const router = express.Router();

router.get('/dashboard', (req, res) => {
    console.log(userData.user.loggedIn);
    if (userData.user.username === '' || !userData.user.loggedIn) {
        return res.redirect('/');
    }
    const tasks = adminData.tasks;
    const ideas = adminData.ideas;

    res.render('dashboard.ejs', {
        tasksData: tasks,
        ideasData: ideas,
        usersData: userData.user,
        pageTitle: 'Dashboard',
        isActive: true,
        pagePath: '/dashboard'
    });
});

exports.routes = router