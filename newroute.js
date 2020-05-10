const express= require('express');
const app= express.Router();
const User=require('./models/user.js');
const bcrypt=require('bcryptjs');
const joi= require('joi');
const jwt=require('jsonwebtoken');

app.post('/addpost', async (req,res)=>{
    
const schema2={
    name:joi.string().min(6).required(),
    email:joi.string().min(6).required().email(),
    password:joi.string().min(6).required()
}


const repose= joi.validate(req.body,schema2);

if(repose.error)
{
    return res.status(400).send(repose.error.details[0].message);
}

const userdetail= await User.findOne({email:req.body.email});
if(userdetail)
{
    return res.send("email alraedy existd");
}

const hash=await bcrypt.genSalt(10);

const passwordhash= await bcrypt.hash(req.body.password, hash);

console.log(passwordhash);

        const user= new User({
            name:req.body.name,
            email:req.body.email,
            password:passwordhash
        });
       
        
try{
const posteddta=await user.save();
res.json(posteddta);
}

catch(error)
{
    res.json({message:error});
}

             //post.save().then(data =>
               // {
                 //   res.json(data);
                //}).catch(err =>{
                  //  res.json({message:err});
                //});
         //   res.json(postvalue);
       // }
       // catch(err)
       // {
        //    res.json({message:err});
       // }
    
        console.log("hdhfhf");      
    });

app.get('/',async (req,res)=>
{
    try{
        const getpost=await User.find();
        res.json(getpost);
    }

    catch(error)
    {
        res.json({message:error});
    }
})


app.post('/login', async (req,res)=>{
console.log('hfhsh');
const udlogin= await User.findOne({email:req.body.email});
if(!udlogin)
{
return res.send("email do not exits");
}

const pass= await bcrypt.compare(req.body.password,udlogin.password);

if(!pass)
{
    return res.send("password is wrong");

}

const token= jwt.sign({_id:udlogin._id}, process.env.SECRET_KEY);

res.header('auth-token',token);
//res.send(JSON.Stringify(token));
res.json(token);
console.log('jdewojdoewjo');
//res.send("logged in successfully into the applcaion");
})
module.exports=app;     

