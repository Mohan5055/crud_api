require('dotenv').config();
const express=require("express");

const app=express();

require("./db/conn");

const apirouter=require("./routes/router");

app.use(express.json());
app.use(apirouter);

const port=process.env.PORT || 4000

app.listen(port,()=>{
    console.log(`Port is listining at port no ${port}`)
})