const approot=require('app-root-path');
const winston=require('winston');

const streamoption={
    file:{
        level:'info',
        filename:`${approot}/logs/applog.js`,
        handleExceptions:true,
        json:true,
        maxsize:5242880,
        maxFiles:5,
        colorize:false
    },
    console:{
        level:'debug',
        handleExceptions:true,
        colorize:true,
        json:false
    }
}

const loggerapp=winston.createLogger({
    transports:[
        new winston.transports.File(streamoption.file),
        new winston.transports.Console(streamoption.console)
    ],
    exitonError:false


});


loggerapp.stream= {
    write: function(message,encoding){

        loggerapp.info(message);
    },

};


module.exports=loggerapp;

