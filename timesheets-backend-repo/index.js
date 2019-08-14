var express = require('express');
var app = express();
var cors = require('cors');

var port = 8080;


app.listen(port, function(){
  console.log('Now up and running on port', port);
})
