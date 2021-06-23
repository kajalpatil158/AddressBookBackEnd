const userService = require('../service/userData.js');
const validateData = require('../middleware/validation.js');
const userField = require('../middleware/userData.js')
class UserInfo {
    /**
     * @Description - Create User Data.
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
    login = (req, res) => {
        console.log('req.body: ' + JSON.stringify(req.body));
        let userInfo = userField.userData.validate(req.body);
        console.log('userInDatafo' + userInfo);
        console.log('req.body: ' + JSON.stringify(userInfo));
        console.log('req.body: ' + JSON.stringify(userInfo.value));
        userService.getUserByEmail(userInfo.value, (error, validationUser) => {
            if (error) {
                return res.status(404).send({
                    success: false,
                    message: error
                });
            }
            res.send({
                success: true,
                message: "User Login Successfull!!",
                token: validationUser
            });
        })
    }
}

module.exports = new UserInfo();