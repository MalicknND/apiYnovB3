const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
});

module.exports = mongoose.model('Skills', skillSchema);
