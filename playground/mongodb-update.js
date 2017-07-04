const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID("595bbcfe81c29d1d25ea9c60")
	// },{$set:{completed:true}},{returnOriginal:false}).then((result)=>{
	// 	console.log(result);
	// })

	db.collection('User').findOneAndUpdate({
		_id: new ObjectID("595a86354b0e37150fee28e8")
	},{$set:{name:"Nalla"},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
		console.log(result);
	})


});