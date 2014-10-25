var express = require('express'),
    stylus=require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

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

mongoose.connect('mongodb://localhost/multivision');
var db = mongoose.connection;
db.on('error,', console.error.bind(console, 'connection error'));
db.once('open', function callback(){
    console.log('multivision db opened');
});
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});

app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

// catch-all route - last
app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = 3030;
app.listen(port);
console.log("Listening on Port " + port + "...Let the Magic Begin!")