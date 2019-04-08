const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();

app.use(express.json({limit: '2kb'}));
app.use(express.urlencoded({limit: '2kb', extended: false}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://paktusin.github.io");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/log/google', function (req, res) {
    const data = `${new Date().toISOString()} - ${JSON.stringify(req.body)} \n`;
    fs.appendFile('google.log', data, (err) => {
        if (err) throw err;
        console.log('Saved!');
    });
    res.json('ok');
});

app.get('/log', function (req, res) {
    res.json('log');
});

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
