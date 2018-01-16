// server.js
// where your node app starts

// init project
var formidable = require('formidable');
var express = require('express');
var util = require('util');
var app = express();
var http = require('http');
var fs = require('fs');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(__dirname + '/public'));
//console.log(process.cwd())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post('/uploads', function (req, res) {
  //var read = req.query.uploads;
  //console.log(req)
      var form = new formidable.IncomingForm();
      form.uploadDir = './uploads';
      //form.type = 'multipart';

  
    form.parse(req, function(err, fields, files) {
      var size = form.bytesRecieved;
      var expSize = form.bytesExpected;
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



/*
  if (req.url == './uploads') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      console.log(req)
      res.write('File uploaded');
      res.end(files);



app.get("/dreams", function (request, response) {
//  console.log('request parameter', request.params, 'upload', upload)
  response.send(upload);
});
*/
/*
// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/uploads", function (request, response) {
  upload.push(request.query.uploads);
  console.log(request.query.uploads)
  response.sendStatus(200);
});
*/
/*
app.post("/uploads", function (req, res) {
//console.log(req.query.uploads)
  //var read = req.query.uploads;
  //console.log(req)
      var form = new formidable.IncomingForm();
      form.uploadDir = './uploads';
      //form.type = 'multipart';
      var size = form.bytesRecieved;
      var expSize = form.bytesExpected;
//console.log(form)
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
});

// Simple in-memory store for now
var upload = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
*/