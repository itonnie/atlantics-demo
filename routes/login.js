var express = require('express');
var Admin = require('../models/admin');
var jwt = require("jsonwebtoken");
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('login', {
        title: 'Login'
    });
});

router.post('/', (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;

    console.log('hi');

    Admin.findOne({ email: email, password: password }, (err, result) => {
        if(err) throw err;
        else if(result == null) {
            res.json({
                ok: false,
                message: "Incorrect username and password combination"
            });
        } else {
            var token = jwt.sign({ user: result }, 'tonniewanjohi_secretkey');
            res.json({
                ok: true,
                token: token,
                userinfo: result
            });
        }
    })
});

module.exports = router;