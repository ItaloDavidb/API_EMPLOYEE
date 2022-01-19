const EmployeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async create(payload) {
    return EmployeeSchema.create(payload,'-_id employee_id name cpf office birthday situation');
  }

  async findall(){
    return EmployeeSchema.find('-_id employee_id name cpf office birthday situation');
  }

  async find(payload){
    return EmployeeSchema.find(payload,'-_id employee_id name cpf office birthday situation');
  }
}
module.exports = new EmployeeRepository();