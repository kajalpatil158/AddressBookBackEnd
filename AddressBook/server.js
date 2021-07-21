const express = require('express');
require('dotenv').config();

// create express app
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');

//Connect to DB
const dbconnection = require('./config/dbconfig.js');
const logger = require('./config/logger');
dbconnection();

// parse requests 
app.use(express.json())

//To Dispaly swgger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// define a simple route
app.get('/', (req, res) => {
    res.json(`Well Come In Address Book Application!!!!`);
});

// Require Employee routes
require('./app/routes/addressbook.js')(app);

module.exports = app.listen(5050, () => {
    console.log('Application Is Listening On Port 5050');
});