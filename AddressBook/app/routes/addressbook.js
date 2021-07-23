const AddressBook = require('../controller/addressbook.js');
const UserData = require('../controller/userData.js')
const validate = require('../middleware/helper.js');

module.exports = (app) => {
    // Create a new Address Book Data
    app.post('/addData', AddressBook.createAddressBookData);

    // Retrive All Address Book Data
    app.get('/addressBook', validate.checkToken, AddressBook.findAllAddressBookData);

    // Retrieve a single Address Book Data 
    app.get('/addressBook/:addressBookId', validate.checkToken, AddressBook.findOneAddressBookData);

    // Update a Address Book Data 
    app.put('/update/:addressBookId', validate.checkToken, AddressBook.updateAddressBookData);

    // Delete a Address Book Data
    app.delete('/delete/:addressBookId', validate.checkToken, AddressBook.deleteAddressBookData);

    // Created And Added User
    app.post('/adduser', UserData.userRegistrationDetails);

    // Login User
    app.post('/login', UserData.loginUser);

}