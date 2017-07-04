// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');


// var user = {name:'lan' age:20};
// var {name} = user;

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	db.collection('Todos').insertOne({
		text:"Eating",
		completed:false
	}, (err,results)=> {
		if (err) {
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(results.ops,undefined,2));
	});

	// db.collection('User').insertOne({
	// 	name:"Lan",
	// 	age:20, 
	// }, (err,results)=> {
	// 	if (err) {
	// 		return console.log('Unable to insert todo',err);
	// 	}
	// 	console.log(results.ops[0]._id.getTimestamp());
	// });

	// db.close();
});