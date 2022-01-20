const ProductService = require('../service/ProductService');

class ProductController {
  async create(req, res) {
    try {
      const data = await ProductService.create(req.body);
      return res.status(201).json({
        'product_id': data.product_id,
        'name': data.name,
        'category': data.category,
        'price': data.price,
        'employee_id': data.employee_id

      });
    } catch (error) {
      return res.status(400).json({
        'message': 'bad request',
        'details': [
          {
            'message': error.message,
          }
        ]
      });
    }
  }

  async find(req, res) {
    try {
      const name1 = req.query.name;
      const category1 = req.query.category;
      const data = await ProductService.find(name1,category1);
      return res.status(201).json(data);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

}

module.exports = new ProductController;