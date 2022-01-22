const ProductController = require('../app/controller/ProductController');
const validation = require('../app/validation/product');
const validationG = require('../app/validation/employee/get');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/',validation,ProductController.create);
  routes.get('/', validationG,ProductController.find);
  server.use(prefix, routes);

};