const AddressBook = require('../controller/addressbook.js');

module.exports = (app) => {
    // Create a new employeespayroll
    app.post('/addressBook', AddressBook.create);
}