require('./pokedex/boot/db');
var bodyParser = require('body-parser');

import express from 'express';
import Injector from './pokedex/src/Injector';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send({
        message: 'Welcome to Pokedex!'
    });
});

new Injector( app );

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
