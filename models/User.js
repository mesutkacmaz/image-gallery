const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password at least 6 characters'],
    minlength: 6
  }
}, { timestamps: true })

const User = mongoose.model('Users', UserSchema)

module.exports = User
