//Import express and router class
const router = require('express').Router();

//Import Business Logic
const services = require('../services')

router.get("/", (req,res)=> {
services.showHome(req,res);
});


module.exports = router; 