require('dotenv').config();
const mongoose = require("mongoose");

const DB=process.env.DB_URI
mongoose.connect(DB)
.then(()=>{
    console.log("connection is successful");
})
.catch((error)=>{
    console.log(error);
})