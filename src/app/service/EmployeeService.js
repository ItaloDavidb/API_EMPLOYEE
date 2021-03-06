const EmployeeRepository = require('../repository/EmployeeRepository');
const NotFound = require('../../erros/NotFound');
const InvalidBody = require('../../erros/InvalidBody');

class EmployeeService {
  async create(payload) {
    const Cpfvalidate = await EmployeeRepository.find({cpf:payload.cpf});
    if(Cpfvalidate.length > 0){
      throw new Error('Cpf already exists');
    }
    const data = await EmployeeRepository.create(payload);
    const employee = this.formatCPF(data);
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
    const newData = data.map(employee => this.formatCPF(employee));

    if(newData.length === 0){
      throw new NotFound('Employee');
    }

    return newData;
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
    const employee = this.formatCPF(data);
    return employee;
  }

  async delete(id) {
    return EmployeeRepository.delete(id);
  }

  async findId(id) {
    return EmployeeRepository.findId(id);
  }

  formatCPF(data) {
    const cpf = data.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    const employee = Object.assign(data, { cpf: cpf });
    return employee;
  }

  errorCodes(erro){
    let status = 500;
    if(erro instanceof NotFound){
      status = 404;
    }
    if(erro instanceof InvalidBody){
      status = 400;
    }
  
    return status;
    
  }
}

module.exports = new EmployeeService();

