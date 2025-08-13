// tasks.js
const express = require('express'); //returns an express function:
const adminData = require('./admin.js');
const router = express.Router();

router.get('/', (req, res) => {
    const tasks = adminData.tasks;
    const ideas = adminData.ideas;
    res.render('dashboard.ejs', {
        tasksData: tasks,
        ideasData: ideas,
        pageTitle: 'Dashboard',
        isActive: true,
        pagePath: '/'
    });
});

exports.routes = router