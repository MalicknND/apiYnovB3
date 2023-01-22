const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: 'String',
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2,
  },
  lastName: {
    type: 'String',
    required: true,
    lowercase: true,
    maxLength: 50,
    minLength: 2,
  },
  email: {
    type: 'String',
    required: true,
    lowercase: true,
    unique: true,
    maxLength: 50,
    minLength: 2,
  },
  password: {
    type: 'String',
    required: true,
    maxLength: 250,
    minLength: 2,
  },
  address: {
    type: 'String',
    required: true,
    lowercase: true,
  },
  zipCode: {
    type: 'Number',
    required: true,
    lowercase: true,
  },
  phone: {
    type: 'Number',
    required: true,
    lowercase: true,
  },

  isAdmin: {
    type: 'Boolean',
    required: true,
    default: false,
  },
  typeOfUser: {
    type: 'String',
    enum: ['Freelance', 'Entreprise'],
  },
});

module.exports = mongoose.model('User', userSchema);
