var express=require('express');
var path=require('path'); //System module
var bodyParser=require('body-parser');

var index=require('./routes/index');
var tasks=require('./routes/tasks');

var port=3000;

var app=express();

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set static folder -Angular 2 stuff here
app.use(express.static(path.join(__dirname,'client')));

//Body PAarser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function(){
  console.log('Server started on port '+port);
});
