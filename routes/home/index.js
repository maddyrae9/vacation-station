/* importing required files and packages */
const express = require('express');
const router = express.Router();
const data = require('../../data');
const productsData = data.products;

/* global scoped function */
//------------------------ route to update user information by id
router.get('/', (req, res) => {
	productsData.getAllProducts().then((productsList) => {
		res.render('index', {
            mainTitle: "Welcome to",
            user: req.user,
			products: productsList
        });
    })
    .catch((error) => {
    	res.send({ error: error });
    })
});
// exporting routing apis
module.exports = router;