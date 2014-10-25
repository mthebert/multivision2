var express = require('express'),
    stylus=require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// middleware setup for stylus
function compile(str, path){
    return stylus(str).set('filename', path)
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
// turn on express logging
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname+'/public'));

app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log("Listening on Port " + port + "...Let the Magic Begin!")