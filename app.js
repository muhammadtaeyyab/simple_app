var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/image", function(req, res){
	res.render("image");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("SERVER HAS STARTED!");
});
