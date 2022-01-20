const ProductController = require('../app/controller/ProductController');


module.exports = (server, routes, prefix = '/api/v1/product') => {
  routes.post('/',ProductController.create);
  //routes.get('/', ProductController.find);
  server.use(prefix, routes);

};