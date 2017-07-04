

const {MongoClient,ObjectID} = require('mongodb');


var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');



	// db.collection('Todos').find({
	// 	_id: new ObjectID("595a83f81fc55714adbfa5b5")
	// }).toArray().then((docs)=>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=> {
	// 	console.log('Unable to fetch data',err)
	// })
	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log('Todos Count');
	// 	console.log(count);
	// },(err)=> {
	// 	console.log('Unable to fetch data',err)
	// })

	db.collection('User').find({name:"Lan"}).count().then((count)=> {
		console.log(count);
	},(err)=> {
		console.log(err);
	})
	// db.close();
});