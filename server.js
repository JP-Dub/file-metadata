// init project
var formidable = require('formidable'),
    express = require('express'),
    fs = require('fs'),
    app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/static-files.html
app.use('/public', express.static(__dirname + '/public'));
//console.log(process.cwd())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// json layout
app.set("json spaces", 2);

// retreive uploads and post data
app.post('/uploads', function (req, res) {
  // create a new form object
  var form = new formidable.IncomingForm();
  form.uploadDir = './uploads';

  // parse the new new form data
  form.parse(req, function(err, fields, files) {
    if(err) return console.error(err);
      var obj = files.userFile,
           kb = Number((obj.size/1024).toFixed(2)),
           mb = Number((kb/1024).toFixed(2));
   
      var userFile = {File_uploaded : {Name: obj.name, 
                      Type: obj.type,
                      Size: 
                        {Bytes: obj.size + " Bytes",
                         Kilobytes: kb + " KB",
                         Megabytes: mb + " MB"
                        }
                     }};
    
      // json results of file data
      res.json(userFile);
    
    //removes file after data has been extracted
    fs.unlinkSync(obj.path);
    });
    return;
});

// listen for requests 
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});