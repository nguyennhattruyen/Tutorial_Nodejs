var express = require("express");

var app = express();

app.get("/", function(req, res){
	res.send("MÃI YÊU Z MAD");
});

app.listen(3000, function (){
	console.log("Server is listening in port 3000....")
});
