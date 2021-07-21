const AddressBook = require('../controller/addressbook.js');
const UserData = require('../controller/userData.js')
const validate = require('../middleware/helper.js');

module.exports = (app) => {
    // Create a new Address Book Data
    app.post('/addData', AddressBook.create);

    // Retrive All Address Book Data
    app.get('/addressBook', validate.checkToken, AddressBook.findAll);

    // Retrieve a single Address Book Data 
    app.get('/addressBook/:addressBookId', validate.checkToken, AddressBook.findOne);

    // Update a Address Book Data 
    app.put('/update/:addressBookId', validate.checkToken, AddressBook.update);

    // Delete a Address Book Data
    app.delete('/delete/:addressBookId', validate.checkToken, AddressBook.delete);

    // Created And Added User
    app.post('/adduser', UserData.create);

    // Login User
    app.post('/login', UserData.login);

}