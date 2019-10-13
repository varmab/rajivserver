var express=require('express');
var app=express();

var bodyParser=require('body-parser');

var db=require('./db');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/",function(req,res){
    res.send("Welcome to Rajiv Server")
})

app.get("/api/conferences",function(req,res){
    db.Conference.find({},function(err,conferences){
        if(err) res.send(err);
        res.send(conferences)
    })
})

//id=3&title=WorldXXXX
app.post("/api/conferences",function(req,res){
    var newConference=new db.Conference(req.body)
    newConference.save(function(err,conference){
        if(err) res.send(err);
        res.send(conference);
    })
})

app.put("/api/conferences/:id",function(req,res){
    var id=req.params.id;
    db.Conference.findByIdAndUpdate(id,req.body,function(err,conference){
        if(err) res.send(err);
        res.send(conference)
    })
})

app.delete("/api/conferences/:id",function(req,res){
    var id=req.params.id;
    db.Conference.findByIdAndDelete(id,function(err,conference){
        if(err) res.send(err);
        res.send(conference)
    })
})

app.listen(5000,()=>{
    console.log("Rajiv Server is started")
})