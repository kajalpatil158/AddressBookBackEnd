const AddressModel = require('../models/addressbook.js');
const { genSaltSync, hashSync } = require("bcrypt");

class AddressBookService {
    /* @Description - create method is created.
     * @param- addressBookData send from controller
     * @return callback is used to callback controller
     */
    create = (addressbookData, callBack) => {
            const salt = genSaltSync(10);
            addressbookData.password = hashSync(addressbookData.password, salt);
            console.log(addressbookData, "Service");
            //console.log()
            AddressModel.create(addressbookData, (error, data) => {
                return (error) ? callBack(error, null) : callBack(null, data);
            });
        }
        /* @Description - finAll method is created.
         * @param- addressBookData send from controller
         * @return callback is used to callback controller
         */
    findAll = (callBack) => {
        AddressModel.findAll((error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - findById method is created.
     * @param- Address Book Data send from controller
     * @return callback is used to callback controller
     */
    findById = (addressBookId, callBack) => {
        AddressModel.findById(addressBookId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - updateById method is created.
     * @param - Address Book Data send from controller
     * @return - callback is used to callback controller
     */
    updateByID = (addressBookId, newData, callBack) => {
        AddressModel.updateById(addressBookId, newData, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /* @Description - Delete method is created.
     * @param- Address Book Data send from controller
     * @return callback is used to callback controller
     */
    deleteById = (addressBookId, callBack) => {
        AddressModel.deleteById(addressBookId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }
}
module.exports = new AddressBookService();