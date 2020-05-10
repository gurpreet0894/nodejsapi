const express= require('express');
const app= express.Router();


const books=[{
  name:"firt",
    description:"second"
},
{
  name:'third',
    description:'fourth'
}]


//const books=['book1','book2'];



app.get('/',(req,res)=>
{
    res.render('index',{
        data:{book:books}
    })
});


app.get('/getdeatils',(req,res)=>{
    res.json("hello");
})

module.exports=app;

