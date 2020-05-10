const express=require('express');

const app =express.Router();

const Post=require('./models/post');

var verify=require('./validaterequest');


app.get('/',verify,async (req,res)=>{
try{
    console.log("sjdhfhfw");
    
    //throw new Error(                      'huahduw');
    const getpost= await Post.find();
    console.log(getpost);
    res.json(getpost);
}
catch(err)  
{
    res.json({message:err});
}
});

app.get('/:id',verify, async (req,res)=>
{
    try{
        const getspecificpost= await Post.findById(req.params.id);
        res.json(getspecificpost);
    }
    catch(err){
res.json({message:err});
    }
});




app.post('/addpost', verify, (req,res)=>{
console.log("hello");
console.log(req.body.title);
    const post= new Post({
        title:req.body.title,
        description:req.body.description
    });
    //console.log(post);
    
         post.save().then(data =>
            {
                res.json(data);
            }).catch(err =>{
                res.json({message:err});
            });
     //   res.json(postvalue);
   // }
   // catch(err)
   // {
    //    res.json({message:err});
   // }

    console.log("hdhfhf");      
});

//update featuer

app.patch('/:id',verify, async (req,res)=>{
    try{
        const updatedpost= await Post.updateOne({_id:req.params.id},{$set:{title:req.body.title}});
        res.json(updatedpost);
    }
    catch(err){

        res.json({message:err});
    }
})

app.delete('/:postid',verify, async (req,res)=>{

    try{
        const deletepost= await Post.remove({_id:req.params.postid});

        res.json(deletepost);
    }
    catch(err)
    {
    res.json({message:err});
    }
})

module.exports=app;