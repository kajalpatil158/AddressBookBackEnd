const addressBookService = require('../service/addressbook.js');
const logger = require('../../config/logger.js');
const addressBookData = require('../middleware/validation.js');

class AddressBook {
    /**
     * @Description - Create Address Book Data.
     * @param req is request sent from http
     * @param res is used to send the response
     */
    createAddressBookData = (req, res) => {
        var validationAddressBook = addressBookData.addressbookData.validate(req.body);
        logger.info(req.body);
        if (validationAddressBook.error) {
            return res.status(400).send({
                success: false,
                message: validationAddressBook.error.message
            });
        }
        let addressbookData = req.body;
        addressBookService.create(addressbookData, (error, validationAddressBook) => {
            if (error) {
                return res.status(500).send({
                    success: false,
                    error: error.message,
                    message: "Eroor Occured While Creating Address Book Data",
                })
            }
            return res.status(200).send({
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

    findAllAddressBookData = (req, res) => {
        addressBookService.findAll((error, addressBookData) => {
            if (error) {
                return res.status(400).send({
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

    findOneAddressBookData = (req, res) => {
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
    updateAddressBookData = (req, res) => {
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

    /* @Description - Delete Address Book Data Update Emp Data By Id
     * @param req Is Used To Send Http Request
     * @param res Is Used To Take A Http Responce.
     */
    deleteAddressBookData = async(req, res) => {
        try {
            if (!req.params.addressBookId) {
                return res.status(400).send();
            }
            const deleteAddressBookData = await addressBookService.deleteById(req.params.addressBookId);
            res.send(deleteAddressBookData);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}
module.exports = new AddressBook();