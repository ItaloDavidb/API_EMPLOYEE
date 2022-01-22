const { Router } = require('express');
const employeeRouter = require('../routes/employee.router');
const productRouter = require('./product.route');


module.exports = server => {
  server.use((req, res, next) => {
    employeeRouter(server, new Router());
    productRouter(server, new Router());
    next();
  });
};