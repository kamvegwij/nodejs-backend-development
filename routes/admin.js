// admin.js
const express = require('express'); //returns an express function:
const path = require('path');
const rootDir = require('../util/path.js');

const router = express.Router();

// member variables:
const products = [];

router.post('/product', (req, res) => {
    products.push({
        title: req.body.title || '---',
        price: req.body.price || '---',
        description: req.body.description || '---',
        image: `"${req.body.image}"` || '---'
    });
    res.redirect('/');
});
router.get('/add-product', (req, res) => {
    res.render('add-product.ejs', {
        pageTitle: "Add Products",
        isActive: true,
        pagePath: '/admin/add-product'
    });
});

exports.routes = router;
exports.products = products;