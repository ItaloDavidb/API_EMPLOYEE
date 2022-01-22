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
      const employee_id = req.query.employee_id
      const min_price = req.query.min_price
      const max_price = req.query.max_price
      const data = await ProductService.find(name1,category1,employee_id, min_price,max_price);
      return res.status(201).json({'Product': data});
    } catch (error) {
      return res.status(404).json({
        'message': 'bad request',
        'details':[
          {
            'message':error.message,
          }
        ]
      });
    }
  }

}

module.exports = new ProductController;