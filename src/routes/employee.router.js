const EmployeeController = require('../app/controller/EmployeeController');

module.exports = (server, routes, prefix = '/api/v1/employee') => {
  routes.post('/',  EmployeeController.create);
  // routes.get('/', EmployeeController.find);
  // routes.put('/:employee_id', EmployeeController.update);
  // routes.delete('/:employee_id', EmployeeController.delete);
  server.use(prefix, routes);

};