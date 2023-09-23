const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    CategoryName:{type:String, trim:true, required:true, unique:true},
    CategoryImg:{type:String, trim:true, required:true}
});

const CategoryModel =  mongoose.model('categories', DataSchema);
module.exports = CategoryModel;