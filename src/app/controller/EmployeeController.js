const EmployeeService = require('../service/EmployeeService');

class EmployeeController {
  async create(req, res) {
    try {
      const data = await EmployeeService.create(req.body);
      return res.status(201).json({
        'employee_id': data.employee_id,
        'name':data.name,
        'cpf':data.cpf,
        'office':data.office,
        'birthday':data.birthday,
        'situation':data.situation,
        'createdAt':data.createdAt,
        'updatedAt':data.updatedAt     
      });
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details':[
          {
            'message':error,
          }
        ]
      });
    }
  }

  async find(req,res){
    try{
      const name1 = req.query.name
      const office1 = req.query.office
      const data = await  EmployeeService.find(name1,office1);
      return res.status(201).json({
        'employee':data
      });
    }catch(error){
      return res.status(404).json(error);
    }
  }

  async update(req, res) {
    const employeeId = req.params.employee_id;
    const newData = req.body;
    try {
      const employee = await EmployeeService.findId(employeeId);
      if(employee === null) {
        res.status(404).json({ error: 'ID not found' });
      }
      const updatedEmployee = await EmployeeService.update(employeeId, newData);
      res.status(200).json(updatedEmployee);
    } catch (error) {
      res.status(400).json({
        'message': 'bad request',
        'details':[
          {
            'message':error,
          }
        ]
      });
    }
  }

  async delete(req, res) {
    const employeeId = req.params.employee_id;
    try{
      const employee = await EmployeeService.findId(employeeId);
      if(employee === null) {
        res.status(404).json({ error: 'ID not found' });
      }
      await EmployeeService.delete(employeeId);
      res.status(204).end();
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details':[
          {
            'message':error,
          }
        ]
      });
    }
  }
}

module.exports = new EmployeeController;