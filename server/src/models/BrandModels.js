// import mongoose from "mongoose";
const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    BrandName:{type:String, trim:true, required:true, unique:true},
    BrandImg:{type:String, trim:true, required:true}
},{timestamps:true,versionKey:false});

const BrandModel =  mongoose.model('brands', DataSchema);

module.exports = BrandModel;