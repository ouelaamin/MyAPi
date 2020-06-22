var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('express-group-routes');


var indexRouter = require('./routes/index');
//var index2Router = require('./routes/index2');
var usersRouter = require('./routes/users');

var app = express();

/*
express.application.group = express.Router.group = function(arg1, arg2) {
  var fn, path;

  if (arg2 === undefined) {
      path = "/";
      fn = arg1;
  }
  else {
      path = arg1;
      fn = arg2
  }

  var router = express.Router();
  fn(router);
  this.use(path, router);
  return router;
};
*/



//const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/index', index2Router);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).send({ error: 'Not found' })
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).send({ error: err })
});

module.exports = app;
