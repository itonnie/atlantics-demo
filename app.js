var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var app = express();

mongoose.connect("mongodb://localhost:27017/atlantics");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require("./routes/index"));
app.use('/login', require("./routes/login"));
app.use("/admin", require("./routes/admin"));
app.use('/sales', require('./routes/sales'));

app.listen(3000, () => {
    console.log("Server listening on port 3000")
});