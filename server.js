var dotenv = require('dotenv');
var mongoose = require('mongoose');
var app = require('./app');

dotenv.config({path:'./config.env'});
console.log(process.env.NODE_ENV);

var db = process.env.DB;
var port = process.env.PORT;

mongoose.connect(db, {
    useUnifiedTopology:true,
    useNewUrlParser:true,   
    useFindAndModify:false
}).then(() =>{console.log('Base de datos conectada')})

app.listen(port, ()=>{ console.log(`server up puerto: ${port}`)})