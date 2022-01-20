const ProductRepository = require('../repository/ProductRepository');

class ProductService {
  async create(payload) {
    const data = await ProductRepository.create(payload);
    return data;
  }

  async find(names,category){
    let data = {};
    if(typeof names === 'undefined' && category === 'undefined'){
      data = await ProductRepository.findall();
    }else{

      const ObjName = this.validateName(names);
      const ObjCategory = this.validateCategory(category);
      const obj = Object.assign({},ObjName,ObjCategory);
      data = await ProductRepository.find(obj);
    }
    
    return data;
  }
  validateCategory(category){
    if(typeof category === 'undefined'){
      const ObjCategory = {};
      return ObjCategory;
    }else{
      const ObjCategory2 = {category:category};
      return ObjCategory2;
    }

  }
  validateName(names){
    if(typeof names === 'undefined'){
      const ObjName = {};
      return ObjName;
    }else{
      const ObjName2 = {name: { $regex: '.*' + names + '.*' } };
      return ObjName2;
    }
  }

}

module.exports = new ProductService();

