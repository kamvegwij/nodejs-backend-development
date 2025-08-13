// shop.js
const express = require('express'); //returns an express function:
const path = require('path');
const rootDir = require('../util/path.js');
const adminData = require('./admin.js');

const router = express.Router();

router.get('/', (req, res) => {
    const products = adminData.products;
    res.render('shop.ejs', {
        productsData: products,
        pageTitle: 'Home',
        isActive: true,
        pagePath: '/'
    });
});

exports.routes = router