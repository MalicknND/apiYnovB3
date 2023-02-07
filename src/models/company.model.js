const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
  status: {
    type: 'String',
    required: true,
  },
  NumberOfSiret: {
    type: 'Number',
    required: true,
  },
  address: {
    type: 'String',
    required: true,
    lowercase: true,
  },
  city: {
    type: 'String',
    required: true,
    lowercase: true,
  },
  zipCode: {
    type: 'Number',
    required: true,
    lowercase: true,
  },
});

module.exports = mongoose.model('Entreprise', companySchema);
