const userService = require('../service/userData.js');
const validateData = require('../middleware/validation.js');
const userField = require('../middleware/userData.js')
class UserInfo {
    /**
     * @Description - Create User Data.
     * @param req is request sent from http
     * @param res is used to send the response
     */
    userRegistrationDetails = (req, res) => {
        var validationUser = validateData.userData.validate(req.body);
        if (validationUser.error) {
            return res.status(400).send({
                success: false,
                message: "validationUser.error.message"
            });
        }
        let userData = req.body;
        userService.create(userData, (error, validationUser) => {
            if (error) {
                return res.status(500).send({
                    success: false,
                    logger: error,
                    message: "Eroor Occured While Creating Address Book Data",
                })
            }
            res.status(200).send({
                success: true,
                message: "User Data Is Added",
                data: validationUser
            })
        })
    }



    /**
     * @Description - login User Data.
     * @param req is request sent from http
     * @param res is used to send the response
     */
    /*8 login = (req, res) => {
         let userInfo = userField.userData.validate(req.body);
         userService.getUserByEmail(userInfo.value).then((data) => {
             res.send({
                 success: true,
                 message: "User Login Successfull!!",
                 token: data
             });
         }).catch((err) => {
             res.status(404).send({
                 success: false,
                 message: "error"
             });
         });
     }*/
    async login(req, res) {
        try {
            let userInfo = userField.userData.validate(req.body);
            const userInformation = await userService.getUserByEmail(userInfo.value);
            res.status(201).send(userInformation);

        } catch (e) {
            res.status(400).send(e);
        }
    }
}

module.exports = new UserInfo();