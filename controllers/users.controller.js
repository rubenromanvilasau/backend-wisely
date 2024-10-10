const User = require('../models/user.model');

const getUsers = async(req, res, next) => {
    try {
        const users = await User.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
    res.send('User created');
};

module.exports = {
    getUsers,
};