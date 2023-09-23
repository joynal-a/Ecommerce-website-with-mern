const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    email:{type:String, lowercase:true, required:true, unique:true},
    otp:{type:String, trim:true, required:true}
},{timestamps:true,versionKey:false});

const UserModel =  mongoose.model('Users', DataSchema);

module.exports = UserModel;