const EmployeeService = require('../service/EmployeeService');

class EmployeeController {
  async create(req, res) {
    try {
      const data = await EmployeeService.create(req.body);
      return res.status(201).json(data);
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
      const reqBody = req.body
      const data = await  EmployeeService.find(reqBody);
      return res.status(201).json(data);
    }catch(error){
    return res.status(404).json(error);
    }
  }
}

module.exports = new EmployeeController;