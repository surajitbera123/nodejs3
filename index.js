const express=require("express");



const app=express();

const firstMiddleware=(req,res,next)=>{
    console.log("It is the first middleware");
    next();
}

const secondMiddleware=(req,res,next)=>{
    console.log("It is the second middleware");
    next();
}

app.use(firstMiddleware);

app.get('/first',function(req,res){
    res.send("first is applied all");
})
app.get('/second',secondMiddleware, function(req,res){
    res.send("second is applied middleware")
})
app.get('/third',function(req,res){
    res.send("first is applied all")
})
app.get('/fourth', secondMiddleware,function(req,res){
    res.send("fourth is applied middleware")
})
.listen(5000);