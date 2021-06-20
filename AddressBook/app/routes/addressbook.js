const AddressBook = require('../controller/addressbook.js');

module.exports = (app) => {
    // Create a new Address Book Data
    app.post('/addData', AddressBook.create);

    // Retrive All Address Book Data
    app.get('/addressBook', AddressBook.findAll);

    // Retrieve a single Address Book Data 
    app.get('/addressBook/:addressBookId', AddressBook.findOne);

    // Update a Address Book Data 
    app.put('/update/:addressBookId', AddressBook.update);
}