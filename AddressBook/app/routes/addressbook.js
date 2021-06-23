const AddressBook = require('../controller/addressbook.js');
const UserData = require('../controller/userData.js')
    //const tokenVerified = require('../middleware/helper.js');

module.exports = (app) => {
    // Create a new Address Book Data
    app.post('/addData', AddressBook.create);

    // Retrive All Address Book Data
    app.get('/addressBook', AddressBook.findAll);

    // Retrieve a single Address Book Data 
    app.get('/addressBook/:addressBookId', AddressBook.findOne);

    // Update a Address Book Data 
    app.put('/update/:addressBookId', AddressBook.update);

    // Delete a Address Book Data
    app.delete('/delete/:addressBookId', AddressBook.delete);

    app.post('/adduser', UserData.create);

    app.post('/login', UserData.login);

}