//require mongoose node module
import mongoose from 'mongoose';
const fs = require('fs');

fs.readFile('config/db.local.json', 'utf8', function (err, data) {
    if (err) { return console.log(err); }

    data = JSON.parse(data);
    if ( !data ) { return console.log('Could not read DB File'); }

    //connect to local mongodb database
    var db = `mongodb://${data.user? data.user + ':' + data.password +
                '@' : ''}${data.host}:${data.port}/${data.db}`;

    mongoose.connect(db);
    //attach lister to connected event
    mongoose.connection.once('connected', function() {
        console.log("Connected to database");
    });
});
