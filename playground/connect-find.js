
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
/*  db.collection("Todos").find({
    _id : new ObjectID('5af8b5a224d4ee15472e6d43')
  }).toArray().then ((docs)=>{
    console.log('Todos')
    console.log(JSON.stringify(docs , undefined ,2))
  },(err)=>{
    console.log('unable to featch todo' ,err)
  });*/
db.collection('User').find({ "name": "tota "}).toArray().then((docs)=>{
  console.log(JSON.stringify(docs , undefined ,2))

})
  //client.close ();
});
