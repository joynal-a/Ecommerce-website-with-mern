const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    itle:{type:String, trim:true, required:true},
    des:{type:String, trim:true, required:true},
    price:{type:String, trim:true, required:true},
    productId:{type:mongoose.Schema.Types.ObjectID, required:true},
},{timestamps:true,versionKey:false});

const ProductSliderModel =  mongoose.model('productSliders', DataSchema);

module.exports = ProductSliderModel;