const mongoose = require('mongoose');

const AddressBookSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    address: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    city: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    state: {
        type: String,
        required: true,
        validate: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: /^[0-9]{10}$/
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]+$/
    },
}, {
    timestamps: true
});
const addressBookModel = mongoose.model('AddressBook', AddressBookSchema);
class addBookModel {
    create = (addressBookData, callBack) => {
        console.log(addressBookData);
        const addressbook = new addressBookModel({
            firstName: addressBookData.firstName,
            lastName: addressBookData.lastName,
            address: addressBookData.address,
            city: addressBookData.city,
            state: addressBookData.state,
            phoneNumber: addressBookData.phoneNumber,
            emailId: addressBookData.emailId,
        });
        addressbook.save({}, (error, data) => {
            if (error) {
                return callBack(error, null);
            }
            return callBack(null, data);
        });
    }
}
module.exports = new addBookModel();