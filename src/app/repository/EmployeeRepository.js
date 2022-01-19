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

  async update(id, payload) {
    await EmployeeSchema.updateOne({ employee_id: id }, payload);
    return EmployeeSchema.findOne({ employee_id: id });
  }

  async delete(id) {
    return EmployeeSchema.deleteOne({ employee_id: id });
  }
}
module.exports = new EmployeeRepository();