var express = require("express");
var ect = require("ect");
var bodyParser = require('body-parser');


var app = express();
var renderer = ect({
	root:__dirname + 'views',
	ext: '.ect'
});

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ect');
app.engine('ect', renderer.render);

app.get("/hello", function(req, res){
	//res.send("HELLO WORLD "+ req.query.name);
	res.render('hello', {name: req.query.name})
});
app.get("/calculator", function(req, res) {
	res.render('calculator');
});

app.post('/calculator', function(req, res){
	var a = parseInt(req.body.a);
	var b = parseInt(req.body.b);

	var ketqua = a + b;
	res.render('calculator', {result: ketqua});

});
app.listen(3000, function (){
	console.log("Server is listening in port 3000....")
});
