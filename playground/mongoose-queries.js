const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Student} = require('./../server/models/student');

// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

Student.findById('5b4b205534a1afd5dda357dd').then((student) => {
  if (!student) {
    return console.log('Unable to find student');
  }

  console.log(JSON.stringify(student, undefined, 2));
}, (e) => {
  console.log(e);
});
