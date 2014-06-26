var express = require('express');
var app = express();


app.configure(function(){
  app.use(express.logger('dev'))     // Add default logging
     .use(express.static(__dirname + '/client'));
});


app.listen(3000);
console.log('Listening on port 3000');