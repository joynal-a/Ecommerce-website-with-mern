const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
    {
        img1:{type:String, require:true},
        img2:{type:String, require:false},
        img3:{type:String, require:false},
        img4:{type:String, require:false},
        title:{type:String, trim:true, required:true},
        shortDes:{type:String, trim:true, required:true},
        price:{type:String, trim:true, required:true},
        discount:{type:Boolean, trim:true, required:false},
        image:{type:String, trim:true, required:true},
        star:{type:String, trim:true, required:true},
        stock:{type:Boolean, trim:true, required:true},
    },
    {
        timestamps:true,versionKey:false
    }
);

const ProductDetailsModel =  mongoose.model('ProductDetails', DataSchema);

module.exports = ProductDetailsModel;