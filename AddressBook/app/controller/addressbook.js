const addressBookService = require('../service/addressbook.js');
const addressBookModel = require('../models/addressbook.js');
const addressBookData = require('../middleware/validation.js');

class AddressBook {
    create = (req, res) => {
        var validationAddressBook = addressBookData.addressbookData.validate(req.body);
        console.log(req.body);
        if (validationAddressBook.error) {
            return res.status(400).send({
                message: validationAddressBook.error.message
            });
        }
        let addressbookData = req.body;
        //console.log(addressBookInfo);
        addressBookService.create(addressbookData, (error, validationAddressBook) => {
            if (error) {
                console.log("error occured while creating employee payroll");
            }
            res.send({
                message: "Address Book Data Is Added",
                data: validationAddressBook
            })
        })
    }
}

module.exports = new AddressBook();