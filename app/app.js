/**
 * Created by Supun on 10/28/2017.
 */
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');

var path = require('path');
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
var mongo = require('mongodb');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var session = require('express-session');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

//db_connction
var db=require('./config/db-connection');
var config=require('./config/common');


//app.use(express.static(__dirname+"/views"));

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');

app.use(session({ secret: 'lasithakumaraliyanage' }));
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'bower_components')));

app.set('superSecret', config.secret); // secret variable
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var adddepartment = require('./routes/add-department');
var getInfore = require('./routes/getInfor');
var count = require('./routes/count');
var users = require('./routes/user');
var occupation = require('./routes/occupation');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api',adddepartment);
app.use('/api',getInfore);
app.use('/api',count);
app.use('/api',users);
app.use('/api',occupation);

var routes = require('./routes/routes.js')(app, passport);
module.exports = app;
var port = process.env.PORT || 4133;
app.listen(port);
console.log("se  on port 4133");