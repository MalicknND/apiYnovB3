const mongoose = require('mongoose');

const missionSchema = mongoose.Schema({
  dateOfStart: {
    type: 'Date',
    required: true,
    default: Date.now,
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
    required: [true, 'A mission should have at least one skill'],
  },
  status: {
    type: String,
    enum: ['en cours', 'clôturé'],
    default: 'en cours',
  },
});

module.exports = mongoose.model('Mission', missionSchema);
