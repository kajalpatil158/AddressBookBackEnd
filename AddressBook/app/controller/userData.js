const userService = require('../service/userData.js');
const userModel = require('../models/userData.js');
const validateData = require('../middleware/validation.js');

class UserInfo {
    /**
     * @Description - Create Address Book Data.
     * @param req is request sent from http
     * @param res is used to send the response
     */
    create = (req, res) => {
        var validationUser = validateData.userData.validate(req.body);
        if (validationUser.error) {
            return res.status(400).send({
                success: false,
                message: validationUser.error.message
            });
        }
        let userData = req.body;
        userService.create(userData, (error, validationUser) => {
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
                data: validationUser
            })
        })
    }
}

module.exports = new UserInfo();