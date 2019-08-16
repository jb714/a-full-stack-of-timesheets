const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const timesheetRoutes = express.Router();

var port = 8080;


let Timesheet = require('./models/timesheet.model.js');

app.use(cors());
app.use(bodyParser.json());

//MongoDB Atlas (cloud DB) connection
mongoose.connect(process.env.DB_URI || 'mongodb://localhost/test', {useNewUrlParser: true});

app.listen(port, function(){
  console.log('Now up and running on port', port);
});

mongoose.connection.on('connected', function() {
  console.log('DB is up!!');
});


//custom API endpoints for getting all records, finding by client, and adding a document/record
timesheetRoutes.route('/').get(function(req,res) {

  let filteredQueries = {"Client": {$ne: ""}, "Project": {$ne: ""}};
  let desiredFields = { "Client": 1, "Project": 1, "Hours": 1, "Billable?": 1, "Billable Rate": 1 };

  Timesheet.find(filteredQueries, desiredFields, function(err, timesheets){
    if(err) {
      console.log(err)
    }
    else {
      res.json(timesheets);
    }
  })
});

timesheetRoutes.route('/client_search').get(function(req,res) {

  let clientQuery = req.query.clientQuery;

  let desiredFields = { "Client": 1, "Project": 1, "Hours": 1, "Billable?": 1, "Billable Rate": 1 };

  Timesheet.find({"Client": clientQuery}, desiredFields, function(err, clientTimesheets){
    if(err) {
      console.log(err)
    }
    else {
      res.json(clientTimesheets);
    }
  })
});

timesheetRoutes.route('/add_entry').post(function(req,res) {
  let newTimesheet = new Timesheet(req.body);

  newTimesheet.save()
  .then(newTimesheet =>{
    res.status(200).json({'newTimesheet': newTimesheet});
  })
  .catch(err => {
    res.status(400).send('hmmm something went wrong...');
  })
});

app.use('/timesheets', timesheetRoutes)
