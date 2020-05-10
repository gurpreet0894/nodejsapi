const express= require('express');
const app=express.Router();
const verify=require('./validaterequest.js');
app.get('/',verify,(req,res)=>{

    res.send(req.user);
})

module.exports=app;