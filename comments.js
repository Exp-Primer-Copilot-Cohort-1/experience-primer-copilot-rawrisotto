// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up the server
var server = app.listen(3000, function () {
  console.log('Server is running at http://localhost:3000/');
});