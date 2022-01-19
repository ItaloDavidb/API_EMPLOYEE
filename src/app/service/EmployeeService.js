const EmployeeRepository = require('../repository/EmployeeRepository')

class EmployeeService {
    async create(payload) {
      const data = await EmployeeRepository.create(payload);
      return data;
    }
  }

  module.exports = new EmployeeService();

