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
    .use("/posts",require("./routes/posts.js"))
const Post=mongoose.model("Post");

//Test PostMan
app.get("/post",(request,response)=>{
    response.send({
        name:"Apoorv"
    })
})
/*
//Dummy get request
app.get("/posts",async(request,response)=>{
    try{
        const posts=await Post.find({});
        response.send(posts);
    }catch(error){
        response.status(500);
    }
});

//Dummy get request wih filter
app.get("/posts/:postId",async (req,res)=>{
    try{
        const post=await Post.findOne({_id:req.params.postId})//find for all the entries and findOne for first occurence
        res.send(post);
    }catch(error){
        res.status(500);
    }
})

//Dummy put request
app.put("/posts/:postId",async(req,res)=>{
    try{
        const post=await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true, // If new:true in addidtional information then
            runValidators:true
        })       
        res.send(post)//the post object sent here is updated otherwise it is the original one but updates are made regardless  
    }catch(error){
        res.status(500);
    }
})

//Dummy Delete
app.delete("/posts/:postId",async(req,res)=>{
    try{
        const post=await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post);
    }catch(error){
        res.status(500)
    }
})
//Dummy post request
app.post("/posts",async (req,res)=>{
    try{

        const post=new Post();
        post.title=req.body.title;
        post.content=req.body.content;
        
        await post.save();// Dummy Save to DB
        res.send(post);
    }catch(error){
        res.status(500);
    }
        
})
*/
//Dummy Console Check
app.listen(7777,function(){
    console.log("Server Running at port 7777");
});