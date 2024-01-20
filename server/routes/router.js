
const express = require("express");
const router = new express.Router();
const apimodels=require('../models/models');

// api for create the data

router.post("/post",async(req,res)=>{
   try {
    const userpostapi=new apimodels(req.body);
    const postapi=await userpostapi.save();
    res.status(201).send(postapi);
   } catch (error) {
    res.status(400).send(error);
   }
})

// api for  get the data

router.get("/",async(req,res)=>{
    try {
        const getapi= await apimodels.find();
        res.status(201).send(getapi);
    } catch (error) {
        res.status(400).send(error);
    }
})

// api for get the data individual

router.get("/:id", async(req,res)=>{
    try {
        const usergetapi = req.params.id;
        const indgetapi= await apimodels.findById(usergetapi);
        res.status(201).send(indgetapi);
    } catch (error) {
        res.status(400).send(error);
    }
})

// api for the update the data

router.put("/update/:id",async(req,res)=>{
    try {
        const userputapi=req.params.id;
        const updateapi= await apimodels.findByIdAndUpdate(userputapi,req.body,{new:true});
        res.status(201).send(updateapi);
    } catch (error) {
        res.status(400).send(error);        
    }
})

// api for to delete the all the data

router.delete("/delete",async(req,res)=>{
    try {
        const userdeleteapi=await apimodels.deleteMany();
        res.status(201).send(userdeleteapi);
    } catch (error) {
        res.status(201).send(error);      
    }
})

// api for to delete the individual data according there id

router.delete("/delete/:id",async(req,res)=>{
   try {
    const _id=req.params.id;
    const indapidelete=await apimodels.findByIdAndDelete(_id);
    res.status(201).send(indapidelete);
   } catch (error) {
    res.status(400).send(error);
   }
})


module.exports=router;