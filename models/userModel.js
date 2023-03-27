const mongoose = require('mongoose');
const { STRING } = require('sequelize');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  role: {
    type: String,
  },
  certificate: {
    type: Boolean,
  }
}, { timestamps: true });

let User = mongoose.model('User', userSchema);

module.exports = User;