const { Router } = require('express');
const taskController = require('../controllers/tasks.controller');

const router = Router();

router.get('/users/:id/tasks', taskController.getUserTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:taskId', taskController.updateTask);
router.delete('/tasks/:taskId', taskController.deleteTask);

module.exports = router;