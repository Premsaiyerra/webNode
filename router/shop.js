const express = require('express')
const path = require('path')

const rootDir = require('../util/path');

const router = express.Router()

const admindata =require('./admin')

router.get('/', (req, res, next) => {
    const products = admindata.products;
    res.render('shop',
    {prods:products,
     Pagetitle:'Shop',
     path:'/',
     hasProducts: products.length > 0,
     activeShop:true,
     productCSS:true
    })
});

module.exports = router;