// server.js
// where your node app starts

// init project
var formidable = require('formidable');
var express = require('express');
var util = require('util');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(__dirname + '/public'));
//console.log(process.cwd())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
/*
app.get("/dreams", function (request, response) {
  console.log('request parameter', request.params, 'upload', upload)
  response.send(upload);
});*/
/*
// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  upload.push(request.query.dream);
  console.log(request.query.dream)
  response.sendStatus(200);
});*/

app.put("/uploads", function (req, res) {
  
      var form = new formidable.IncomingForm();
      form.uploadDir = '/uploads';
      form
 
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
  
  upload.push(req.query.uploads);
  console.log(req)
  res.sendStatus(200);
});

// Simple in-memory store for now
var upload = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
