const User = require('../models/user.model');

const getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send({data: users});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsers,
};