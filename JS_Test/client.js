var express = require('express');
var app = express();

// 추가
app.get('/', function(req, res){
    res.send('Hello World');
});