const createError = require('http-errors'); 
const express = require('express');
const port = 3011;
const imagesDir = '/images';
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const fileSystem = require('fs');


// define routes as variables
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const processImages = require("./routes/processImages");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//setting middleware serves resources from public folder
app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + imagesDir));

// define files where scripts in for all routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/processimages", processImages);


//TODO: Add POST & GET functions to Server-Side Application

//TODO: Create informations and save it in txt file
/*
function saveImageInformations(title='default', date='01.01.1001', imageURL='./public/images') {
  fileSystem.writeFile(
    './public/imagebase/imageInformations.json',
    title + '_' + date + '_' + imageURL + '\r\n',
    function (err) {
      if (err) return console.log(err);
    }
  );
}
*/


function countImage() {
  fileSystem.readdir('./public/images', (err, files) => {
    if (err) throw err;
    console.log(files);
  });
} 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//* Server is listeing
app.listen(port, () => {
  console.log("Hello");
  //countImage();
  //saveImageInformations();
})

module.exports = app;
