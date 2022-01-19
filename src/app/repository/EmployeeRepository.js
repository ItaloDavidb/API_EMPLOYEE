const EmployeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async create(payload) {
    return EmployeeSchema.create(payload);
  }

  async findall(){
    return EmployeeSchema.find();
  }

  async find(payload){
    return EmployeeSchema.find(payload);
  }
}
module.exports = new EmployeeRepository();