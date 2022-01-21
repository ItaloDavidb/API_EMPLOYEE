const ProductRepository = require('../repository/ProductRepository');
const EmployeeRepository = require('../repository/EmployeeRepository');
const NotFound = require('../../erros/NotFound');

class ProductService {
  async create(payload) {
    const employeeId = payload.employee_id;
    const employee = await EmployeeRepository.findId(employeeId);
    if(employee.office !== 'gerente' || employee.situation !== 'activate') {
      throw new Error('Product can only be registered by an active manager');
    }
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
    if(data.length === 0){
      throw new NotFound('Product')
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

