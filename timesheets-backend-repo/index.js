const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const timesheetRoutes = require('./routes');
require('dotenv').config();

var port = 8080;

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

// /timesheets is the main route branch for this set of endpoints. All other endpoint slugs branch/connect to this, using the 'timesheetRoutes' instance of express.Router()
app.use('/timesheets', timesheetRoutes)
