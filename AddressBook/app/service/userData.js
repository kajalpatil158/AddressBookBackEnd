const UserModel = require('../models/userData.js');

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
}

module.exports = new UserService();