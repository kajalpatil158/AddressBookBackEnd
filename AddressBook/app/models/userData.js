const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
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
const userModel = mongoose.model('UserSchema', UserSchema);
class userDataModel {
    /* @Description - Create method Created To Save Data.
     * @param addressBookData is data sent from Service.
     * @return callback is used to callback Services includes error message or data
     */
    create = (userData, callBack) => {
        const user = new userModel({
            firstName: userData.firstName,
            lastName: userData.lastName,
            emailId: userData.emailId,
            password: userData.password,
        });
        user.save({}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }
}

module.exports = new userDataModel();