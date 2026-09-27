const express=require('express');const Job=require('../models/Job');const router=express.Router();
router.get('/',async(req,res)=>{try{const{search,location,category}=req.query;const filter={status:'Active'};if(location)filter.location=new RegExp(location,'i');if(category)filter.category=category;if(search)filter.$or=[{title:new RegExp(search,'i')},{description:new RegExp(search,'i')}];res.json({success:true,jobs:await Job.find(filter).sort({createdAt:-1})})}catch(e){res.status(500).json({message:e.message})}});
router.get('/:id',async(req,res)=>{try{const job=await Job.findById(req.params.id);if(!job)return res.status(404).json({message:'Job not found'});res.json({success:true,job})}catch(e){res.status(500).json({message:e.message})}});
router.post('/',async(req,res)=>{try{res.status(201).json({success:true,job:await Job.create(req.body)})}catch(e){res.status(400).json({message:e.message})}});
module.exports=router;
