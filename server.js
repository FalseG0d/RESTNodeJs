const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const morgan=require("morgan")

//Connect To DB
require("./mongo")

//Models
require("./model/Post")

//Middleware
app.use(bodyParser.json())
    .use(morgan())


//Routes
app.use("/posts",require("./routes/posts"))

//Test PostMan
app.get("/post",(request,response)=>{
    response.send({
        name:"Apoorv"
    })
})

//Dummy Console Check
app.listen(7777,function(){
    console.log("Server Running at port 7777");
});