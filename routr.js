const express=require('express');

const app=express.Router();

const courses=[{id:1,name:"course1"},
{id:2,name:"course2"},
{id:3,name:"course3"},
{id:4,name:"course4"},
{id:5,name:"course5"},
];

const joi=require('joi');


app.get('/',(req,res)=>
{
    res.send("he;loo world!!!!");
})

app.get('/api/courses/',(req,res) => {
console.log('kdasdjal');
res.send(JSON.stringify(courses));
})


//get part with specif 

app.get('/api/courses/:id',(req,res)=>{

    const cours=courses.find(c=>c.id === parseInt(req.params.id));
    if(!cours)
    {
        res.status(404).send("Id not found");
        return;
    }

    res.send(cours);
})

// post method demo part

 app.post('/api/courses/',(req,res) =>
 {
    //  const schema = {

      //  name: joi.string().min(3).required()
   //  }
    // console.log("pool");

// const result= joi.validate(req.body,schema);
//console.log(courses.length);


//if(result.error)
//return res. status(400).send(result.error.details[0].message);


const {error}=validateprop(req.body);

if(error)
return res.status(400).send(error.details[0].message);

   //  if(!req.body.name || req.body.name.length < 3)
   //  {
     //    res.status(400).send("bad request");
      //   return;
    // }

    


     const coure={

        id:courses.length + 1,
        name:req.body.name
     };

     courses.push(coure);

     res.send(courses);
 })

 app.put('/api/courses/:id',(req,res)=>{

    const course2=courses.find(c=>c.id===parseInt(req.params.id));

    if(!course2)
    return res.status(404).send("id not found");

    const {error}= validateprop(req.body);

    if(error)
    {
        return res.status(400).send(error.details[0].message);
    }

    course2.name=req.body.name;

    res.send(course2);

 })

 app.delete('/api/courses/:id',(req,res)=>
 {
     const course4=courses.find(c=>c.id === parseInt(req.params.id));

     if(!course4)
     return res.status(404).send("required id is not found");

     const course5=courses.indexOf(course4);

     courses.splice(course5,1);

     res.send(course4);
 })

 module.exports= app;
 function validateprop(course)
{
    const schema4={
        name: joi.string().min(3).required()
    }

    return joi.validate(course,schema4);
}