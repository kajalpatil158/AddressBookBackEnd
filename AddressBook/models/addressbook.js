const mongoose = require('mongoose');

const AddressBookSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    address: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    city: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    state: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    zip: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[a-z]{2,}$/
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: /^[0-9]{10}$/
    },
    emailId: {
        type: String,
        required: true,
        validate: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);