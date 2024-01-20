const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:[true,"Email id already present"]
    },
    rollno:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const studentAPI=new mongoose.model("studentAPI",apiSchema);

module.exports=studentAPI;