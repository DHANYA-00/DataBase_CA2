const express=require('express');

const UserData=require('./schema');
const route=express.Router();

route.post('/',async(req,res)=>{
    try{
        const{Name,Location,Cuisine,Rating,Menu}=req.body;
        if(!Name||!Location||!Cuisine||!Rating||!Menu){
            return res.status(400).json({
                error:"Failed to Create"
            })
        }
        const AddData=await UserData.create(req.body);
        return res.status(200).json({
            message:"Created Successfully",user:AddData
        })
    }
    catch{
        return res.status(500).json({
            error:"Internal server error"
        })
    }
});

route.get('/',async(req,res)=>{
    try{
        const Datas=await UserData.find();
        if(!Datas){
            return res.status(400).json({
                error:"Failed to fetch"
            })
        }
        return res.status(200).json({
            message:"Fetched Successfully",user:Datas
        })
    }
    catch{
        return res.status(500).json({
            error:"Internal server error"
        })
    }
});

route.get('/:id',async(req,res)=>{
    try{
        const Data =await UserData.findById(req.params.id);
        if(!Data){
            return res.status(400).json({
                error:"Failed to fetch"
            })
        }
        return res.status(200).json({
            message:"Fetched Successfully",user:Data
        })
    }
    catch{
        return res.status(500).json({
            error:"Internal server error"
        })
    }
});

route.put('/:id',async(req,res)=>{
    try{
        const UpdateData=await UserData.findByIdAndUpdate(req.params.id,req.body);
        if(!UpdateData){
            return res.status(400).json({
                error:"Failed to Update"
            })
        }
        return res.status(200).json({
            message:"Updated Successfully",user:UpdateData
        })
    }
    catch{
        return res.status(500).json({
            error:"Internal server error"
        })
    }
});

route.delete('/:id',async(req,res)=>{
    try{
        const DeleteData=await UserData.findByIdAndDelete(req.params.id);
        if(!DeleteData){
            return res.status(400).json({
                error:"Failed to Delete"
            })
        }
        return res.status(200).json({
            message:"Deleted Successfully",user:DeleteData
        })
    }
    catch{
        return res.status(500).json({
            error:"Internal server error"
        })
    }
})

module.exports=route;