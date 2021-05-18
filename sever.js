const express=require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(_dirname+"/index.html");
});
app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.num2);
    var result=n1+n2;
    res.send("The answer is"+result);
});
app.listen(2000,function()
{
    console.log("Sever has started on post 2000");
});
