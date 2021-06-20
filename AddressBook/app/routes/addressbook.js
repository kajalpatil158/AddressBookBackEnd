const AddressBook = require('../controller/addressbook.js');

module.exports = (app) => {
    // Create a new Address Book Data
    app.post('/addData', AddressBook.create);

    // Retrive All Address Book Data
    app.get('/addressBook', AddressBook.findAll);
}