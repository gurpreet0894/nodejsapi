const express= require('express');











































const app=express();
const secondroute=require('./secondroute.js');
const routr=require('./routr.js');
const newroute=require('./newroute.js'); 
const authroute=require('./authroute.js'); 
const ejstutorial=require('./ejstutorial.js'); 
const bodyparser=require('body-parser'); 
const helmet=require('helmet');

const cors=require('cors');

require('dotenv/config');

const mongoose=require('mongoose');



//middleware for securing http repone

app.use(helmet());


//logging 

const morgon=require('morgan');
const winston=require('./winston/winston.js');

//app.use('combined');
//app.use('tiny');
//logginf with custom tokens(same as method ,url)
morgon.token('pingname',function(req,res){
    return req.hostname;
})


//logginf custom tokens with args

morgon.token('param',function(req,res,param){

    return req.params[param];
    }
);

//app.use(morgon('method :url :status :res[content-length] :param[id]'));
app.use(morgon('combined',{stream:winston.stream}));
//app.use(morgon('method :url :status :res[content-length] :pingname'));
//app.use(morgon(':method :url :status :res[content-length] - :response-time ms'));





mongoose.connect(process.env.DB_CONNECTION2,{ useNewUrlParser: true },()=>
{
    console.log("db connected");
})
app.use(cors());

app.use(express.json());
//app.use(bodyparser.urlencoded({ extended: false }))

//app.use(bodyparser.json());

app.set('view engine','ejs');
/*const courses=[{id:1,name:"course1"},
{id:2,name:"course2"},
{id:3,name:"course3"},
{id:4,name:"course4"},
{id:5,name:"course5"},
];*/

app.use('/coursetool/',routr);
app.use('/mongodbexample/',secondroute);
app.use('/mongologin/',newroute);
app.use('/loginauth/',authroute);
app.use('/ejstutorial/',ejstutorial);



/*app.get('/',(req,res)=>
{
    res.send("he;loo world!!!!");
})

app.get('/api/courses/',(req,res) => {

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
 })*/

 app.use(function(err,req,res,next){

    console.log(err);

winston.error(`${err.status|| 500} - ${err.message}`);
    next();
})

const port=process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log("hapy world");
})




/*function validateprop(course)
{
    const schema4={
        name: joi.string().min(3).required()
    }

    return joi.validate(course,schema4);
}*/