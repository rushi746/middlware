const http =requre('http');
const express=requre('express');

app.use((req,res,next)=>{
    console.log("in the middleware");
    next()
});


app.use((req,res,next)=>{
    console.log("in the middleware");

const app=express();

});

const server=http.createServer(middleware);
server.listner(3000);
