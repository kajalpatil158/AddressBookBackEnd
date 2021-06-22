const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const helper = require('../middleware/helper.js');

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
    password: {
        type: String,
        required: true,
        validate: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    }
}, {
    timestamps: true
});
const addressBookModel = mongoose.model('AddressBook', AddressBookSchema);
class addBookModel {
    /* @Description - Create method Created To Save Data.
     * @param addressBookData is data sent from Service.
     * @return callback is used to callback Services includes error message or data
     */
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
            password: addressBookData.password,
        });
        addressbook.save({}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - FindAll method Created To Find A Employee Payroll Data.
     * @param  data sent from Service
     * @return callback is used to callback Services includes error message or data
     */

    findAll = (callBack) => {
        addressBookModel.find((error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - FindById method Created To Finding Data By Id.
     * @param  data sent from Service
     * @return callback is used to callback Services includes error message or data
     */
    findById = (addressBookId, callBack) => {
        addressBookModel.findById(addressBookId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - Update method Created To Updated A Data
     * @param data sent from Service
     * @return callback is used to callback Services includes error message or data
     */
    updateById = (newData, addressBookId, callBack) => {
        addressBookModel.findByIdAndUpdate(addressBookId, {
                firstName: newData.firstName,
                lastName: newData.lastName,
                address: newData.address,
                city: newData.city,
                state: newData.state,
                phoneNumber: newData.phoneNumber,
                emailId: newData.emailId,
                password: newData.password,
            }, { new: true },
            (error, data) => {
                return (error) ? callBack(error, null) : callBack(null, data);
            });
    }

    /* @Description - Update method Created To Updated A Data
     * @param data sent from Service
     * @return callback is used to callback Services includes error message or data
     */
    deleteById = (addressBookId, callBack) => {
        addressBookModel.findByIdAndRemove(addressBookId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

}
module.exports = new addBookModel();