var express = require('express');
var app = express();
var path = require('path');

app.use('/public', express.static(__dirname + '/public'));

app.get('/jogos', function(req,res, next) {
    res.sendFile(path.join(__dirname+ '/views/index.html'));
});

app.get('/api/jogos', function(req,res,next) {
    let teste = require('./repository/jogos.json');
    res.status(200).json(teste);
});

var porta = 9098;
app.listen(porta, function() {
    console.log('listening on ' + porta);
});