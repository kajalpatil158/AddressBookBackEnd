const addressBookService = require('../service/addressbook.js');
const addressBookModel = require('../models/addressbook.js');
const addressBookData = require('../middleware/validation.js');

class AddressBook {
    /**
     * @Description - Create Address Book Data.
     * @param req is request sent from http
     * @param res is used to send the response
     */
    create = (req, res) => {
        var validationAddressBook = addressBookData.addressbookData.validate(req.body);
        console.log(req.body);
        if (validationAddressBook.error) {
            return res.status(400).send({
                success: false,
                message: validationAddressBook.error.message
            });
        }
        let addressbookData = req.body;
        //console.log(addressBookInfo);
        addressBookService.create(addressbookData, (error, validationAddressBook) => {
            if (error) {
                return res.status(500).send({
                    success: false,
                    error: error.message,
                    message: "Eroor Occured While Creating Address Book Data",
                })
            }
            res.status(201).send({
                success: true,
                message: "Address Book Data Is Added",
                data: validationAddressBook
            })
        })
    }

    /* @Description - Find Address Book Data Retrive All Emp Data
     * @param req is request sent from http
     * @param res is used to send the response
     */

    findAll = (req, res) => {
        addressBookService.findAll((error, addressBookData) => {
            if (error) {
                return res.status(404).send({
                    success: false,
                    message: "Error Occured While Retriving Data"
                })
            }
            res.send({
                success: true,
                message: "All Address Book Data Is Here",
                data: addressBookData
            })
        })
    };

    /* @Description - FindOne Address Book Data Retrive Address Book Data By Id
     * @param req Is Used To Send Http Request
     * @param res Is Used To Take A Http Responce.
     */

    findOne = (req, res) => {
        let addressDataId = req.params.addressBookId;
        addressBookService.findById(addressDataId, (error, addressBookData) => {
            if (error) {
                return res.status(404).send({
                    success: false,
                    message: "some error is occurred"
                })
            }
            res.send({
                success: true,
                data: addressBookData
            })
        })
    }

    /* @Description - Update Employee Payroll Data Update Emp Data By Id
     * @param req Is Used To Send Http Request
     * @param res Is Used To Take A Http Responce.
     */
    update = (req, res) => {
        let addressDataId = req.params.addressBookId;
        addressBookService.updateByID(req.body, addressDataId, (error, newData) => {
            if (error) {
                return res.status(404).send({
                    success: false,
                    message: "Address Book Data Not Finding With Given Id "
                });
            }
            res.send({
                success: true,
                message: "Address Book Data updated successfully",
                data: newData
            })
        })
    };
}

module.exports = new AddressBook();