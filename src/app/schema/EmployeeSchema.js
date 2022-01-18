const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  cpf: String,
  office: String,
  birthday:Date,
  situation: {
    type: String,
    enum : ['activate','deactivate'],
    default: 'activate'
},
createdAt:{
    type:Date,default:Date.now

},

updatedAt:{
    type:Date,default:Date.now
}
})

const User = mongoose.model('Employees', UserSchema);

module.exports = User;