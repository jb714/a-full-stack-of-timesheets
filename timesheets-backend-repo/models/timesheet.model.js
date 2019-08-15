const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Timesheet = new Schema({
  client: {
    type: String,
    required: true
  },
  project_name: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  billable_hours: {
    type: Number,
    required: true
  },
  billable_rate: {
    type: Number,
    required: true
  }
});


module.exports = mongoose.model('Timesheet', Timesheet);
