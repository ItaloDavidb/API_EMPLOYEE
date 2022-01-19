const EmployeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async create(payload) {
    return EmployeeSchema.create(payload);
  }

  async findall(){
    return EmployeeSchema.find();
  }

  async find(payload){
    return EmployeeSchema.find(payload,'-_id employee_id name cpf office birthday situation');
  }

  async update(id, payload) {
    await EmployeeSchema.updateOne({ employee_id: id }, payload);
    return EmployeeSchema.findOne({ employee_id: id }, '-_id employee_id name cpf office birthday situation');
  }

  async delete(id) {
    return EmployeeSchema.deleteOne({ employee_id: id });
  }
}
module.exports = new EmployeeRepository();