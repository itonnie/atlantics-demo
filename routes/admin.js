var express = require('express');
var Item = require('../models/item');
var router = express.Router();

router.get('/', (req, res, next) => {

    Item.find((err, result) => {
        if(err) throw err;
        else {
            res.render('admin', {
                title: 'Admin',
                items: result
            });
        }
    });
    
});

router.post('/additem', (req, res, next) => {

    var newItem = new Item({
        item: req.body.item,
        price: req.body.price,
        discount: req.body.discount
    });

    newItem.save((err, result) => {
        if(err) throw err;
        else {
            res.json({
                ok: true,
                message: 'Item ' + req.body.item + " added successfully"
            });
        }
    });

});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.render('login', {
            title: 'Login',
            message: "you have to login first!"
        })
    }
}

module.exports = router;