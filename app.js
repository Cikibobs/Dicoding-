'use strict';

const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

/*
[ROUTE] '/'
[Response] => Hello world!
*/
app.get('/', (req, res) => {
    res.send('Hello Dian NurBudi Leksono!\n');
});

/*
[ROUTE] '/me'
[Response] => dian_nurbudi
*/
app.get('/me', (req, res) => {
    res.send('dian_nurbudi');
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
