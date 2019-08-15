const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const timesheetRoutes = express.Router();
let Timesheet = require('./models/timesheet.model.js');


timesheetRoutes.route('/').get(function(req,res) {

  let filteredQueries = {
    "Client": {$ne: ""},
    "Project": {$ne: ""},
  };

  let desiredFields = {
    "Client": 1,
    "Project": 1,
    "Hours": 1,
    "Billable?": 1,
    "Billable Rate": 1
  };

  Timesheet.find(filteredQueries, desiredFields,
    function(err, timesheets){
    if(err) {
      console.log(err)
    }
    else {
      res.json(timesheets);
    }
  })
});

app.use('/timesheets', timesheetRoutes)
