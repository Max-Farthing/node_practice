const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    console.log("log 2");
    res.send('<h1>Hello World</h1>')
});

app.use('/', (req, res, next) => {
    console.log("log 1");
    res.send('<h1>Home Page</h1>')
});


app.listen(3000);