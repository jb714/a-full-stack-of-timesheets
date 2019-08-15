var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser     = require('body-parser');
const mongoose = require('mongoose');

var port = 8080;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});

app.listen(port, function(){
  console.log('Now up and running on port', port);
});

mongoose.connection.on('connected', function(){
  console.log('DB is up!!');
});
