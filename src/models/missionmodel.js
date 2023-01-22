const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
  dateOfStart: {
    type: 'Date',
    required: true,
  },
  dateOfEnd: {
    type: 'Date',
    required: true,
  },
  amount: {
    type: 'Number',
    required: true,
  },
  description: {
    type: 'String',
    required: true,
  },
  title: {
    type: 'String',
    required: true,
  },
  job: {
    type: mongoose.Types.ObjectId,
    ref: 'Jobs',
    required: true,
  },
  skills: {
    type: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Skills',
      },
    ],
    required: true,
    validate: [arrayLimit, 'A mission should have at least one skill'],
  },
});

module.exports = mongoose.model('Mission', missionSchema);
