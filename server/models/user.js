var mongoose = require('mongoose');

const userInfo = mongoose.model('userInfo',{
  'email': {
     type :String ,
     required :true ,
     minlingth: 1,
     trim: true
   } ,
'passwrd' :{
type : String
}});
module.exports={userInfo};
