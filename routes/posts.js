const router=require("express").Router();
const mongoose=require("mongoose");


const Post=mongoose.model("Post");



//Dummy post request
router.post("/",async(req,res)=>{
    try{
        const post=new Post();
        post.title=req.body.title;
        post.content=req.body.content;
        await post.save();
        res.send(post);
    }catch(error){
        res.send({"error":error});
    }
})

//Dummy get request
router.get("/",async(req,res)=>{
    try{
        const posts=await Post.find({});
        res.send(posts);
    }catch(error){
        res.status(500);
    }
})

//Dummy get request wih filter
router.get("/:postId",async (req,res)=>{
    try{
        const post=await Post.findOne({_id:req.params.postId})//find for all the entries and findOne for first occurence
        res.send(post);
    }catch(error){
        res.status(500);
    }
})

//Dummy put request
router.put("/:postId",async(req,res)=>{
    try{
        const post=await Post.findByIdAndUpdate({
            _id:req.params.postId
        },req.body,{
            new:true, // If new:true in addidtional information then
            runValidater:true
        })       
        res.send(post)//the post object sent here is updated otherwise it is the original one but updates are made regardless  
    }catch(error){
        res.status(500);
    }
})

//Dummy Delete
router.delete("/:postId",async(req,res)=>{
    try{
        const post=await Post.findByIdAndRemove({
            _id:req.params.postId
        });
        res.send(post);
    }catch(error){
        res.status(500)
    }
})



module.exports=router;