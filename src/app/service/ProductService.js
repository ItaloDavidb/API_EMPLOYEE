const ProductRepository = require('../repository/ProductRepository');
const NotFound = require('../../erros/NotFound')

class ProductService {
  async create(payload) {
    const data = await ProductRepository.create(payload);
    return data;
  }

  async find(names,category,employee_id,min_price,max_price){
    let data = {};
    if(typeof names === 'undefined' && category === 'undefined'){
      data = await ProductRepository.findall();
    }else{

      const price = this.validatePrice(min_price,max_price)
      const ObjEmployee_id = this.validateEmployee_id(employee_id)
      const ObjName = this.validateName(names);
      const ObjCategory = this.validateCategory(category);
      const obj = Object.assign({},ObjName,ObjCategory,ObjEmployee_id,price);
      data = await ProductRepository.find(obj);
    }
    if(data.length === 0){
      throw new NotFound('Product')
    }
    
    return data;
  }

  validatePrice(min_price,max_price){
    let min = 0
    let max = 9999999999
    if(typeof min_price !== 'undefined'){
      min = min_price 
    }
    if(typeof max_price !== 'undefined'){
      max = max_price
    }
    
    const min_max = {price : {$gte:min ,$lte:max}}
    return min_max
  }

  validateEmployee_id(employee_id){
    if(typeof employee_id === 'undefined'){
      const Objemployee_id = {};
      return Objemployee_id;
    }else{
      const Objemployee_id = {employee_id:employee_id};
      return Objemployee_id;
    }
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

