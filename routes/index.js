const express = require('express');

const tasksRoutes = require('./tasks.routes.js');
const usersRoutes = require('./users.routes.js');

const router = express();

router.use(tasksRoutes);
router.use(usersRoutes);

module.exports = router;