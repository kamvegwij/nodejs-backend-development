// admin.js
const express = require('express'); //returns an express function:
const { body, validationResult } = require('express-validator');
const router = express.Router();

// member variables:
const tasks = [];

router.post('/tasks', [
    body('title').notEmpty().withMessage("Please enter in a Title!").trim().escape(),
    body('time').notEmpty().withMessage("Please enter a time!").escape(),
    body('description').notEmpty().withMessage('Please fill in a description!').trim().escape()
] ,(req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        console.log(validation);
        return res.redirect('/admin/add-tasks');
    }
    tasks.push({
        title: req.body.title,
        time: req.body.time,
        description: req.body.description
    });
    res.redirect('/');
});
router.get('/add-tasks', (req, res) => {
    res.render('add-tasks.ejs', {
        pageTitle: "Add Tasks",
        isActive: true,
        pagePath: '/admin/add-tasks'
    });
});

exports.routes = router;
exports.tasks = tasks;