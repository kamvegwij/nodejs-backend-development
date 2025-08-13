// tasks.js
const express = require('express'); //returns an express function:
const adminData = require('./admin.js');
const router = express.Router();

router.get('/', (req, res) => {
    const tasks = adminData.tasks;
    res.render('tasks.ejs', {
        tasksData: tasks,
        pageTitle: 'Home',
        isActive: true,
        pagePath: '/'
    });
});

exports.routes = router