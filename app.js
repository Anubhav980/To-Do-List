//jshint esversion:6

const express = require("express");
const body = require("body-parser");
const daye = require(__dirname+"/date.js");
const app = express();

let dayy ="";

var inl =["Buy Food","Cook Food", "Eat Food"];
var tet = [];

app.use(body.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res){

  res.render("list",{kind: daye.getDay(), lis: inl});
});

app.post("/",function(req,res){
  let inls = req.body.textwala;
  if(req.body.list === dayy)
  {
    tet.push(inls);
    res.redirect("/work");
  }
  else {
    inl.push(inls);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  dayy = "Work List for "+daye.getDa();
  res.render("list",{kind: "Work List for "+daye.getDa(), lis: tet});
});

app.post("/work", function(req, res) {
  let itej = req.body.textwala;
  tet.push(itej);
  res.redirect("/work");
});

app.get("/about", function(req ,res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
