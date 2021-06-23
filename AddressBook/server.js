const express = require('express');
require('dotenv').config();

// create express app
const app = express();

//Connect to DB
const dbconnection = require('./config/dbconfig.js');
dbconnection();

// parse requests 
app.use(express.json())

// define a simple route
app.get('/', (req, res) => {
    res.json(`Well Come In Address Book Application!!!!`);
});

// Require Employee routes
require('./app/routes/addressbook.js')(app);

module.exports = app.listen(5050, () => {
    console.log('Application Is Listening On Port 5050');
});