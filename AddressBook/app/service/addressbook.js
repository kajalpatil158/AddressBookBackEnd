const AddressModel = require('../models/addressbook.js');

class AddressBookService {
    create = (addressbookData, callBack) => {
        console.log(addressbookData, "Service");
        //console.log()
        AddressModel.create(addressbookData, (error, data) => {
            if (error) {
                return callBack(errror.null);
            }
            return callBack(null, data);
        })
    }
}
module.exports = new AddressBookService();