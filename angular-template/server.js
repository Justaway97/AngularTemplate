var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'build'))); // <-- this is pointing to your static html, css and js files

app.listen(process.env.PORT || 80);