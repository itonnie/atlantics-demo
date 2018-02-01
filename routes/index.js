var express = require("express");
var Item = require("../models/item");
var router = express.Router();

router.get('/', (req, res, next) => {
    Item.find((err, result) => {
        if(err) throw err;
        else {
            res.render('home', {
                title: 'Home',
                items: result
            });
        }
    });
});

module.exports = router;