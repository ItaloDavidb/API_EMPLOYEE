const JoiImport = require('joi');
const DateExtension = require ('@joi/date');

const Joi = JoiImport.extend(DateExtension);

module.exports = async (req,res,next) =>{
  try {
    const employeeschema = Joi.object({
      name: Joi.string().min(3).max(30).required().trim(),
      cpf: Joi.string().pattern(/^[0-9]+$/, 'numbers').length(11).required(),
      office: Joi.string().required().valid('gerente','vendedor','caixa'),
      birthday: Joi.date().format('DD/MM/YYYY').raw().max('now').greater('1-1-1900').required()
    });
    /*  */
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