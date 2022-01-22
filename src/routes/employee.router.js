const EmployeeController = require('../app/controller/EmployeeController');
const validation = require('../app/validation/employee');
const validationD = require('../app/validation/employee/delete');
const validationP = require('../app/validation/employee/put');
const validationG = require('../app/validation/employee/get');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',validation,EmployeeController.create);
  routes.get('/', validationG,EmployeeController.find);
  routes.put('/:employee_id', validationP,validationD,EmployeeController.update);
  routes.delete('/:employee_id', validationD,EmployeeController.delete);
  server.use(prefix, routes);

};