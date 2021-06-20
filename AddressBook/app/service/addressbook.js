const AddressModel = require('../models/addressbook.js');
const { genSaltSync, hashSync } = require("bcrypt");

class AddressBookService {
    create = (addressbookData, callBack) => {
        const salt = genSaltSync(10);
        addressbookData.password = hashSync(addressbookData.password, salt);
        console.log(addressbookData, "Service");
        //console.log()
        AddressModel.create(addressbookData, (error, data) => {
            if (error) {
                return callBack(error.null);
            }
            return callBack(null, data);
        })
    }

    findAll = (callBack) => {
        AddressModel.findAll((error, data) => {
            if (error) {
                return callBack(error.null);
            }
            return callBack(null, data);
        })
    }
}
module.exports = new AddressBookService();