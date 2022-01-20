const ProductController = require('../app/controller/ProductController');
const validation = require('../app/validation/product');

module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/',validation,ProductController.create);
  //routes.get('/', ProductController.find);
  server.use(prefix, routes);

};