const EmployeeController = require('../app/controller/EmployeeController');
const validation = require('../app/validation/employee');
const validationD = require('../app/validation/employee/delete');
const validationP = require('../app/validation/employee/put');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',validation,EmployeeController.create);
  routes.get('/', EmployeeController.find);
  routes.put('/:employee_id', validationP,EmployeeController.update);
  routes.delete('/:employee_id', validationD,EmployeeController.delete);
  server.use(prefix, routes);

};