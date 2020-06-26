var express = require('express');
var morgan = require('morgan');
var helmet = require('helmet');
var mongoSanitize = require('express-mongo-sanitize');
var xss = require('xss-clean');
var rateLimite = require('express-rate-limit');
var hpp = require('hpp');

var app = express();

app.use(helmet());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json({limit:'10kb'}));
app.use(mongoSanitize());
app.use(xss());

var limiter = rateLimite({
    max:100,
    windowMs: 60*60*1000,
    message: 'Muchos peticiones desdeesta ip'
})

app.use(hpp({
    whitelist: []
}))

app.use('/api',limiter)






module.exports = app;