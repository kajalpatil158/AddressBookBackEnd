const mongoose = require('mongoose');

/* @Description- Created A Database Connection Function
 * Passing Url And Establish connection.
 * return mongoose connection
 */
function dbconnection() {
    mongoose.promise;
    const url = 'mongodb://localhost:27017/AddressBook';
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    return mongoose.connection
        .then(() => {
            console.log("Successfully connected to the database");
        }).catch(error => {
            console.log('Could not connect to the database. Exiting now...', error);
            process.exit();
        });
}
module.exports = dbconnection;