const Joi = require('joi');

module.exports = async (req,res,next) =>{
  try {
    const validation = Joi.object({
      name: Joi.string(),
      office: Joi.string().valid('gerente','vendedor','caixa'),
      employee_id: Joi.string().guid({version: 'uuidv4'})
    });
    const {error} = await validation.validate(req.query,{abortEarl:true});
    if(error) throw error;
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