const EmployeeSchema = require('../schema/EmployeeSchema');

class EmployeeRepository {
  async create(payload) {
    return EmployeeSchema.create(payload);
  }
}
module.exports = new EmployeeRepository();