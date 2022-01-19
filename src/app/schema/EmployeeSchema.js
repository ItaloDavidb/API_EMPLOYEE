const mongoose = require('mongoose');
const uuid = require('node-uuid');

const EmployeeSchema = mongoose.Schema({
  employee_id: { 
    type: String, 
    default: uuid.v1,
    index:true,
    mongoose:mongoose.ObjectId 
  },
  name: String,
  cpf: String,
  office:{
    type:String,
    enum:['gerente','vendedor','caixa']
  },
  birthday:Date,
  situation: {
    type: String,
    enum : ['activate','deactivate'],
    default: 'activate'
  }
  ,
  createdAt:{
    type:Date,default:Date.now
  }
  ,
  updatedAt:{
    type:Date,default:Date.now
  }

});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;