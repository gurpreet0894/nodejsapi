const jwt=require('jsonwebtoken');

module.exports=function (req,res,next)
{

 const token = req.header('auth-token');

 if(!token)
 {
     return res.status(401).json('access required');

 }

 try{
 const verify=jwt.verify(token,process.env.SECRET_KEY);

 req.user=verify;

 next();
 }
 catch(error)
 
 {
     res.status(401).json({mesage:error});
 }
}