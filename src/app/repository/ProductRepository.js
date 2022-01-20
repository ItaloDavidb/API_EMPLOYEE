const ProductSchema = require('../schema/ProductSchema');

class ProductRepository {
  async create(payload) {
    return ProductSchema.create(payload);
  }

  async findall(){
    return ProductSchema.find();
  }

  async find(payload){
    return ProductSchema.find(payload);
  }

}
module.exports = new ProductRepository();