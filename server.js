var express = require("express");
var ect = require("ect");


var app = express();
var renderer = ect({
	root:__dirname + 'views',
	ext: '.ect'
});

app.set('view engine','ect');
app.engine('ect', renderer.render);

app.get("/hello", function(req, res){
	//res.send("HELLO WORLD "+ req.query.name);
	res.render('hello', {name: req.query.name})
});

app.listen(3000, function (){
	console.log("Server is listening in port 3000....")
});
