const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Timesheet = new Schema({
  Client: {
    type: String,
    required: true
  },
  Project: {
    type: String,
    required: true
  },
  Hours: {
    type: Number,
    required: true
  },
  "Billable?": {
    type: String,
    required: true
  },
  "Billable Rate": {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Timesheet', Timesheet);
