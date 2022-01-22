const Joi = require('joi');
const InvalidBody = require('../../../erros/InvalidBody');

module.exports = async (req,res,next) =>{
  try {
    const productschema = Joi.object({
      name: Joi.string().required().trim(),
      category:Joi.string().required(),
      price: Joi.number().required(),
      employee_id: Joi.string().required().guid({version: 'uuidv4'})
    });
    const {error} = await productschema.validate(req.body,{abortEarl:true});
    if(error) throw new InvalidBody(error);
    return next();
  } catch (error) {
    return res.status(400).json({
      'message': 'bad request',
      'details':[
        {
          'message':error.message,
        }
      ]
    });
        
  }
};