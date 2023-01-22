const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  name: {
    type: 'String',
    required: true,
  },
  skills: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Skills',
    },
  ],
});

module.exports = mongoose.model('Jobs', jobSchema);
