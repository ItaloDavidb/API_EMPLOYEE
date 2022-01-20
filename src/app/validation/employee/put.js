const Joi = require('joi');

module.exports = async (req,res,next) =>{
  try {
    const employeeschema = Joi.object({
      name: Joi.string().trim(),
      cpf: Joi.string().pattern(/^[0-9]+$/, 'numbers').length(11),
      office: Joi.string().valid('gerente','vendedor','caixa'),
      birthday: Joi.date().max('now').greater('1-1-1900')
    });
    const {error} = await employeeschema.validate(req.body,{abortEarl:true});
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