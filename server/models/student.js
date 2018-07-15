var mongoose = require('mongoose');

var Student = mongoose.model('Student', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

module.exports = {Student}
