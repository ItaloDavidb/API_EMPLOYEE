const ProductSchema = require('../schema/ProductSchema');

class ProductRepository {
  async create(payload) {
    return ProductSchema.create(payload);
  }

  async findall(){
    return ProductSchema.find();
  }


}
module.exports = new ProductRepository();