const Joi = require('joi');

module.exports = async (req,res,next) =>{
  try {
    const validation = Joi.object({
      employee_id: Joi.string().required().guid({version: 'uuidv4'})
    });
    const {error} = await validation.validate(req.params,{abortEarl:true});
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