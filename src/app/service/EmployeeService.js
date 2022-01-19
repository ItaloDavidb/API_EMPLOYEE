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

  async update(id, payload) {
    const data = await EmployeeRepository.update(id, payload);
    return data;
  }

  async delete(id) {
    return EmployeeRepository.delete(id);
  }
}

module.exports = new EmployeeService();

