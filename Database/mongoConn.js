'use strict';

const mysql = require('mysql');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    database : "crime"
})

//connect

db.connect((err) => {
    if(err){
        console.log("connection to sql failed");
        
    }
    else{
        console.log("Connection Established with mySql");     
    }
})


// const mongoose = require('mongoose');
// var dbConfig = require('../Config/db');

// console.log('trying to connect to db..');

// mongoose.connect(dbConfig.url,{
//     useNewUrlParser: true
// });

// var mongoConn = mongoose.connection;

// mongoConn.on('error', console.error.bind(console, 'Connection error: '));
// mongoConn.once('open', function(callback) {
//     console.log('Successfully connected to MongoDB /.');
// });

module.exports = db;
