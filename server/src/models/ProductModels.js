const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    ProductName:{type:String, trim:true, required:true},
    ProductImg:{type:String, trim:true, required:true}
},{timestamps:true,versionKey:false});

const ProductModel =  mongoose.model('products', DataSchema);

module.exports = ProductModel;