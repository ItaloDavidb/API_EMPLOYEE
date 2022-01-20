const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {
  async create(payload) {
    const data = await EmployeeRepository.create(payload);
    return data;
  }

  async find(names,offices){
    let data = {};
    if(typeof names === 'undefined' && offices === 'undefined'){
      data = await EmployeeRepository.findall();
    }else{

      const ObjName = this.validateName(names);
      const ObjOffice = this.validateOffice(offices);
      const obj = Object.assign({},ObjName,ObjOffice);
      data = await EmployeeRepository.find(obj);
    }
    
    return data;
  }
  validateOffice(offices){
    if(typeof offices === 'undefined'){
      const ObjOffice = {};
      return ObjOffice;
    }else{
      const ObjOffice2 = {office:offices};
      return ObjOffice2;
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

  async update(id, payload) {
    const data = await EmployeeRepository.update(id, payload);
    return data;
  }

  async delete(id) {
    return EmployeeRepository.delete(id);
  }
}

module.exports = new EmployeeService();

