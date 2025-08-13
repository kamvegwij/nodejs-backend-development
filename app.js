//app.js - startup file:
const express = require('express'); //returns an express function:
const path = require('path');
const bodyParser = require('body-parser');

const adminData = require('./routes/admin.js');
const tasksData = require('./routes/tasks.js');

const app = express(); //allows us to use express middleware utility functions:
app.set('view engine', 'ejs'); //tell express to use the templating engine: pug.
app.set('views', 'views'); //tell the engine where to find the html files

app.use(bodyParser.urlencoded({ extended: false })); //allow for parsing of data chunks.
app.use(express.static(path.join(__dirname, 'public'))); //server static files.

app.use('/admin', adminData.routes);
app.use(tasksData.routes);

app.use((req, res, next) => {
    res.status(404).render('404.ejs', { pageTitle: "Page Error 404" });
});
app.listen(5050);