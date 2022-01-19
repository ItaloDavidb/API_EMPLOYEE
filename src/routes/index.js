const { Router } = require('express');
const employeeRouter = require('../routes/employee.router');


module.exports = server => {
  server.use((req, res, next) => {
    employeeRouter(server, new Router());
    next();
  });
};