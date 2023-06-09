var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { mongooseConnect } = require('./db')

require('dotenv').config()
mongooseConnect()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const blogsRouter = require('./routes/blogs')
const authorRouter = require('./routes/authors')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blogs', blogsRouter)
app.use('/authors', authorRouter)

module.exports = app;
