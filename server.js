//var express = require('express');
import express from 'express';
import Injector from './pokedex/src/Injector';

var app = express();

app.get('/', function (req, res) {
    res.send({
        message: 'Welcome to Pokedex!'
    });
});

//require mongoose node module
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://192.168.99.100:27017/pokedex');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database");
});

new Injector( app );

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
