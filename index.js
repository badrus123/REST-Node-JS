const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');
// soal no 1 import library


var cors = require('cors')
var connection = require('./conn');
var routes = require('./route');
var response = require('./res');


//init global variable
app.use((req,res,next)=>{
    // bikin variable global
    //contoh global.NAMA VARIABLE = connection
    // variable ga pake $
    global.connection = connection;
    global.response = response;
    next()
});

//parser library buat parser data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: true}))

//manggil routes
routes(app);

app.use((req, res, next)=>{
    var err = new Error('HALAMAN GA ADA');
    err.status = 404;
    next(err);
});

//listener nodejs
app.listen(port);
console.log("server jalan");