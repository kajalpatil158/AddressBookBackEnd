const UserModel = require('../models/userData.js');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
require("dotenv").config();

class UserService {
    /* @Description - create method is created.
     * @param- user data send from controller
     * @return callback is used to callback controller
     */
    create = (userData, callBack) => {
        UserModel.create(userData, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    getUserByEmail = (credentials, callback) => {
        UserModel.getUserByEmail(credentials, (error, data) => {
            let result;
            if (error) {
                return callback(error, null);
            } else if (result = bcrypt.compareSync(credentials.password, data.password)) {
                //data.password = undefined;
                const jsontoken = sign({ result: data }, process.env.JWT_KEY, { expiresIn: "1h" });
                //console.log(jsontoken);
                return callback(null, jsontoken);
            }
            return callback("Invalid Email", null);
        });
    }
}

module.exports = new UserService();