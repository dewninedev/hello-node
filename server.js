'use strict';

const express = require('express');
const os = require('os');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

const hostname = os.hostname();
const network = os.networkInterfaces();

app.get('/', (req, res) => {
    res.send(`Hello world<br/> hostname:${hostname} <br/> network: ${JSON.stringify(network)}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);