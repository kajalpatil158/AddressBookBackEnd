const AddressBook = require('../controller/addressbook.js');

module.exports = (app) => {
    // Create a new employeespayroll
    app.post('/addData', AddressBook.create);

    app.get('/addressBook', AddressBook.findAll);
}