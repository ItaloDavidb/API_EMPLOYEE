const ProductRepository = require('../repository/ProductRepository');

class ProductService {
  async create(payload) {
    const data = await ProductRepository.create(payload);
    return data;
  }

  // async find(names,offices){
  //   let data = {};
  //   if(typeof names === 'undefined' && offices === 'undefined'){
  //     data = await ProductRepository.findall();
  //   }else{

  //     const ObjName = this.validateName(names);
  //     const ObjOffice = this.validateOffice(offices);
  //     const obj = Object.assign({},ObjName,ObjOffice);
  //     data = await ProductRepository.find(obj);
  //   }
    
  //   return data;
  // }
}

module.exports = new ProductService();

