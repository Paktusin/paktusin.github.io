const createError = require('http-errors');
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://paktusin.github.io/**");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.options('*', (req, res, next) => {
    res.status(200).send('');
});

app.post('/log/google', (req, res, next) => {
    let data;
    try {
        data = `${(new Date()).toISOString()} - ${JSON.stringify(req.body)} \n`;
    } catch (e) {
        return next(createError(e.message));
    }
    fs.appendFile('./google.log', data, (err) => {
        if (err) return next(createError(err.message));
        res.send('ok');
    });
});

app.get('/', (req, res, next) => {
    if (!req.query.key || req.query.key !== process.env.KEY) return next(createError(403));
    fs.readFile('./google.log', 'utf8', (err, data) => {
        if (err) return next(createError(404));
        res.send(data.replace('\n', '<br/>').toString());
    });
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json(err);
});

module.exports = app;
