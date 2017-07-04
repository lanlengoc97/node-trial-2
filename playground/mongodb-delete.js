const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');


	//delete many 
	// db.collection('Todos').deleteMany({text:"Eating"}).then((result)=>{
	// 	console.log(result);
	// })

	//delete one
	// db.collection('Todos').deleteOne({text:"Eating"}).then((result)=>{
	// 	console.log(result);
	// })

	//find one ad delete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	// 	console.log(result);
	// })

	db.collection("User").findOneAndDelete({name:"Lan"}).then((result)=>{
		console.log(result);
	})


});