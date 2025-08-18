// admin.js
const express = require('express'); //returns an express function:
const { body, validationResult } = require('express-validator');
const router = express.Router();
const userData = require('./auth.js');

// member variables:
const tasks = [
    {id: 1, title: 'default task', time: '2025-08-14T13:30', description: 'default here...', complete: false},
    {id: 2, title: 'default task2', time: '2025-08-14T13:30', description: 'default here...', complete: false}
];
const ideas = [
    {title: 'default idea', description: 'default here...'}
];

router.get('/add-tasks', (req, res) => {
    res.render('add-tasks.ejs', {
        pageTitle: "Add Tasks",
        isActive: true,
        pagePath: '/admin/add-tasks'
    });
});
router.get('/add-ideas', (req, res) => {
    res.render('add-ideas.ejs', {
        pageTitle: "Add Ideas",
        isActive: true,
        pagePath: '/admin/add-ideas'
    });
});

router.post('/tasks', [
    body('title').notEmpty().withMessage("Please enter in a Title!").trim().escape(),
    body('time').notEmpty().withMessage("Please enter a time!").escape(),
    body('description').notEmpty().withMessage('Please fill in a description!').trim().escape()
], (req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        console.log(validation);
        return res.json({ success: false, status: 500, message: "One of the fields is empty!" });
    }
    tasks.push({
        id: tasks.length + 1,
        title: req.body.title,
        time: req.body.time,
        description: req.body.description,
        complete: false
    });
    res.json({ success: true, status: 200, message: "Task created!" });
});
router.post('/ideas', [
    body('title').notEmpty().withMessage("Please enter in a Title!").trim().escape(),
    body('description').notEmpty().withMessage('Please fill in a description!').trim().escape()
 ], (req, res) => {
    const validation = validationResult(req);
    if (!validation.isEmpty()) {
        console.log(validation);
        return res.json({ success: false, status: 500, message: "One of the fields is empty!" });
    }
    ideas.push({
        title: req.body.title,
        description: req.body.description
    });
    res.json({ success: true, status: 200, message: "Idea added successfully" });
});
router.post('/mark-complete', [
    body('task_id').notEmpty().withMessage("Could not find task!")
], (req, res) => {
    try {
        const validate = validationResult(req);
        if (!validate.isEmpty()) {
            res.json({ success: false, message: 'Could not complete your request!' });
        }
        const { task_id } = req.body;
        tasks.filter(item => item.id === parseInt(task_id))[0].complete = true;
    } catch (err) {
        res.json({ success: false, message: `An unexpected error ocurred ${err.message}` });
    }
});

exports.routes = router;
exports.tasks = tasks;
exports.ideas = ideas;