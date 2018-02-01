var mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
    item: String,
    price: Number,
    discount: Number
});

var Item = mongoose.model('Item', itemSchema, 'items');

module.exports = Item;