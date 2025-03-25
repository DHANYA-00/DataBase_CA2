const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Cuisine:{
        type:String,
        required:true
    },
    Rating:{
        type:Number
    },
   Menu:[
    {Name:{
        type:String,
        required:true
    },
    Description:{
        type:String
    },
    Price:{
        type:Number,
        required:true
    }
}]
    

    
})
module.exports=mongoose.model("UserData",userSchema);