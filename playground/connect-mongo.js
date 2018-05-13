
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
/*   db.collection('Todos').insertOne ({txt : 'something to do ' ,
 completed : false }, (err,result)=>{
   if (err){
     return console.log('unable ti insert',err);
   }
   console.log(JSON.stringify(result.ops, undefined ,2))
 })
 db.collection('User').insertOne ({name : ' ' ,
  age : ' ' , location : ' '}, (err,result)=>{
    if (err){
      return console.log('unable ti insert',err);
    }
    console.log(JSON.stringify(result.ops, undefined ,2))
 })*/
  client.close ();
});
