
//const MongoClient = require ('mongodb').MongoClient ;
const {MongoClient , ObjectID}=require('mongodb')
var opj =new ObjectID();
console.log (opj)

var url = 'mongodb://localhost:27017';
var client = new MongoClient(url);
MongoClient.connect(url,{ useNewUrlParser: true },(err ,client)=>{
  if (err) {
  return  console.log ('unable to connect to mongodb server');
  }
  console.log('connect success');
  const db=client.db('TodoApp')
/*db.collection('Todos').deleteMany({'text': 'eat'}).then((result)=>{
  console.log(result);
})*/
/*db.collection('Todos').deleteOne({'text': 'eat'}).then((res)=>{
  console.log(res)
})*/
/*db.collection('Todos').findOneAndDelete ({'completed': false}).then((result)=>{
  console.log(result)
})*/
db.collection('User').deleteMany({'age' : 27}).then((res)=>{
  console.log(res);
})
/*db.collection('User').findOneAndDelete({'_id' : new ObjectID ('5af8c672a20d711ebbbc0d92')}) .then ((result)=>{
  console.log(result);
})*/
  //client.close ();
});
