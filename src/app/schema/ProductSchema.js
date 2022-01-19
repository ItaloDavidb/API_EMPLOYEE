const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  employee_id:{
    type:String,
    ref:'Employee'
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;