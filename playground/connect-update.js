
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
/*db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5af8bd8ca20d711ebbbc0ae5')} ,
{ $set: {completed: false } },{returnOrginal: false} ).then ((res)=> {
  console.log(res)
});*/
db.collection('User').findOneAndUpdate({
  _id :new ObjectID ('5af8c692a20d711ebbbc0da6')} ,
{ $set: {"name": 'Tsabeeh' } ,  $inc :{age : 1} },
{returnOrginal: false} ).then ((res)=> {
  console.log(res)
});
  //client.close ();
});
