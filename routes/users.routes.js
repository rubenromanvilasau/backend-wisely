const { Router} = require('express');
const userController = require('../controllers/users.controller');

const router = Router();

router.post('/users', userController.createUser);

module.exports = router;