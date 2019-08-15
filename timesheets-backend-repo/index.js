const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const timesheetRoutes = express.Router();

var port = 8080;


let Timesheet = require('./models/timesheet.model.js');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

app.listen(port, function(){
  console.log('Now up and running on port', port);
});

mongoose.connection.on('connected', function() {
  console.log('DB is up!!');
});


timesheetRoutes.route('/').get(function(req,res) {
  Timesheet.find(function(err, timesheets){
    if(err) {
      console.log(err)
    }
    else {
      console.log('timesheets!!', timesheets);
      res.json(timesheets);
    }
  })
});

app.use('/timesheets', timesheetRoutes)
