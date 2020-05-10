const mongoose=require('mongoose');

const userschema=mongoose.Schema({

name:{
    type:String,
    required:true,
    min:6,
    max:16
},

email:{
    type:String,
    required:true,
    min:6,
    max:16
},
password:{
    type:String,
    required:true,
    min:6,
    max:16
}

});

module.exports=mongoose.model('Users',userschema);