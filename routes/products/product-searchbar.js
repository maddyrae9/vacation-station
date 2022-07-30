/* importing required files and packages */
const express = require('express');
const router = express.Router();
const xss = require('xss');
const data = require('../../data');
const productsData = data.products;

/* global scoped function */
//------------------------ route to get product information by id
router.get('/id/:id', (req, res) => {
        productsData.getProductById(req.params.id).then((productInfo) => {

                if (productInfo != null) {
                        res.send(productInfo);
                
                        /* res.render('product/product-info', {
                                mainTitle: `${productInfo.title} •`,
                                user: req.user,
                                product: productInfo
                        }); */
                } else {
                        res.render('alerts/error', {
                                mainTitle: "Page Not Found •",
                                code: 404,
                                message: "Page Not Found",
                                url: req.originalUrl,
                                user: req.user
                        });
                }
        })
        .catch((error) => {
                res.render('alerts/error', {
                        mainTitle: "Page Not Found •",
                        code: 404,
                        message: "Page Not Found",
                        url: req.originalUrl,
                        user: req.user
                });
        })
});