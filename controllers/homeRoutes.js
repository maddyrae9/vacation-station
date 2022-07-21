var express = require('express');
var router = express.Router();
var db = require("../models");

router.get('/', (req, res) => {
  res.render('homepage');
  });
   
    

module.exports = router;
