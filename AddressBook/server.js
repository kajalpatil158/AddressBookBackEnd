const express = require('express');

// create express app
const app = express();

// define a simple route
app.get('/', (req, res) => {
    res.json(`Well Come In Address Book Application!!!!`);
});

app.listen(5050, () => {
    console.log('Application Is Listening On Port 5050');
});