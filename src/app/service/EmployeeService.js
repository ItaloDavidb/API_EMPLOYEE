const EmployeeRepository = require('../repository/EmployeeRepository');

class EmployeeService {
  async create(payload) {
    const data = await EmployeeRepository.create(payload);
    return data;
  }

  async find(payload){
    const payloadData = payload;
    let data = {};

    if(Object.values(payloadData).length === 0){
      data = await EmployeeRepository.findall();
    }else{
      data = await EmployeeRepository.find(payloadData);
    }
    return data;
  }
}

module.exports = new EmployeeService();

