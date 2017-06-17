var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var db = mongojs('expenso',['expenso']);
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.post('/AddExpense', function(req,res){
	db.expenso.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.get('/Summary', function(req, res){
	db.expenso.find(function(err, docs){
		res.json(docs);
	});
});
app.delete('/Remove/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.expenso.remove({_id: mongojs.ObjectId(id)},function(err,doc){
		res.json(doc);
	});
	
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Listening on port %d ",this.address().port);
});