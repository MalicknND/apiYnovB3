const mongoose = require('mongoose');

const freelanceSchema = mongoose.Schema({
  dailyTax: {
    type: 'Number',
    required: true,
  },
  yearOfExperience: {
    type: 'Date',
    required: true,
  },
  skills: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Skills',
    },
  ],
  jobs: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Jobs',
    },
  ],
});

module.exports = mongoose.model('Freelance', freelanceSchema);
