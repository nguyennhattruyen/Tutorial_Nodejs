var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("HELLO WORLD");
});

app.listen(3000, function (){
	console.log("Server is listening in port 3000....")
});
