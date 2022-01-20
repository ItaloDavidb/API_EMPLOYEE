const EmployeeRepository = require('../repository/EmployeeRepository');
const moment = require('moment');

class EmployeeService {
  async create(payload) {
    const data = await EmployeeRepository.create(payload);
    const cpf = this.formatCPF(data.cpf);
    const employee = Object.assign(data, { cpf: cpf }, { birthday: birthday });
    return employee;
  }

  async find(names, offices) {
    let data = {};
    if (typeof names === 'undefined' && offices === 'undefined') {
      data = await EmployeeRepository.findall();
    } else {

      const ObjName = this.validateName(names);
      const ObjOffice = this.validateOffice(offices);
      const obj = Object.assign({}, ObjName, ObjOffice);
      data = await EmployeeRepository.find(obj);
    }

    return data;
  }
  validateOffice(offices) {
    if (typeof offices === 'undefined') {
      const ObjOffice = {};
      return ObjOffice;
    } else {
      const ObjOffice2 = { office: offices };
      return ObjOffice2;
    }

  }
  validateName(names) {
    if (typeof names === 'undefined') {
      const ObjName = {};
      return ObjName;
    } else {
      const ObjName2 = { name: { $regex: '.*' + names + '.*' } };
      return ObjName2;
    }
  }

  async update(id, payload) {
    const data = await EmployeeRepository.update(id, payload);
    const cpf = this.formatCPF(data.cpf);
    const employee = Object.assign(data, { cpf: cpf });
    return employee;
  }

  async delete(id) {
    return EmployeeRepository.delete(id);
  }

  async findId(id) {
    return EmployeeRepository.findId(id);
  }

  formatCPF(cpf) {
    const cpfFormatted = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpfFormatted;
  }
}

module.exports = new EmployeeService();

