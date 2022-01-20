const mongoose = require('mongoose');
const uuid = require('uuid');

const ProductSchema = mongoose.Schema({
  product_id: { 
    type: String, 
    default: uuid.v1
  },
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