var createError = require('http-errors'); //
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var nodeStatic = require('node-static');

// define routes as variables
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var processImages = require("./routes/processImages");

var app = express(); //

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
app.use('/images', express.static(__dirname + '/images'));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/processImages", processImages);


//TODO: Add POST & GET functions to Server-Side Application

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

module.exports = app;
