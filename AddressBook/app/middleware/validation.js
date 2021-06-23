const joi = require("@hapi/joi");

class validateFields {

    addressbookData = joi.object({
        firstName: joi.string().max(25).required(),
        lastName: joi.string().max(25).required(),
        address: joi.string().max(25).required(),
        city: joi.string().max(25).required(),
        state: joi.string().max(25).required(),
        phoneNumber: joi.string().max(10).required(),
        emailId: joi.string().email().required(),
        password: joi.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required(),
    });

    userData = joi.object({
        firstName: joi.string().alphanum().max(30),
        lastName: joi.string().alphanum().max(30),
        emailId: joi.string().email().required(),
        password: joi.string().regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required(),
    });

}
module.exports = new validateFields();