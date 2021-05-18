const { response } = require("express");

const express = require("express");
const bodyPaser = require("body-parser") 
const app = express();
app.use(bodyPaser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var n1=Number( req.body.num1);
    var n2=Number(req.body.num2);
    var result= n1+n2;
    res.send("the answer is " + result)
});
app.listen(3000,function(){
    console.log("server has startted on port 3000");
});