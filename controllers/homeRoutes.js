var express = require('express');
var router = express.Router();
var db = require("../models");


 router.get("/Grocery Stores/search", function (req, res) {

     var type = req.query.type;  
     var GroceryStoresSearch =req.query.GroceryStores_search; 
     db.GroceryStores.findAll({
         where: { [type]: GroceryStoresSearch}
      }).then(function(GroceryStores) {
        console.log(GroceryStores)
        res.render("results", {GroceryStores});
      });
    
     
    });

   
    

module.exports = router;