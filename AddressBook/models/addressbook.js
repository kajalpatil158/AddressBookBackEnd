const mongoose = require('mongoose');

const AddressBookSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phoneNumber: String,
    emailId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);