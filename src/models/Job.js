const mongoose=require('mongoose');
const schema=new mongoose.Schema({title:{type:String,required:true},description:{type:String,required:true},category:{type:String,default:'Other'},location:{type:String,required:true},jobType:{type:String,default:'Full-time'},salary:{min:Number,max:Number,currency:{type:String,default:'GHS'}},employerContact:{name:String,phone:String,whatsapp:String},verified:{type:Boolean,default:false},status:{type:String,default:'Active'}},{timestamps:true});
module.exports=mongoose.model('Job',schema);
