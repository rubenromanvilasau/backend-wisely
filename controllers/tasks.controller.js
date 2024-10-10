const Task = require("../models/task.model");
const User = require("../models/user.model");

const getUserTasks = async(req, res, next) => {
    const { id } = req.params;

    try {
        const userData = await User.findByPk(id);
        
        if(!userData) return res.status(404).send('User not found');

        const tasks = await Task.findAll({
            where: {
                user_id: userData.id,
            }
        });

        return res.send({data: tasks});
    } catch (error) {
        next(error);
    }
};

const createTask = async(req, res, next) => {
    const { name, userId } = req.body;

    if(!name || !userId) return res.status(400).send('Name and userId are required');

    try {
        const newTask = await Task.create({
            name,
            user_id: userId,
            done: false,
        });

        return res.send({message: 'Task created successfully',data: newTask});
    } catch (error) {
        next(error);
    }
};

const deleteTask = async(req, res, next) => {
    const { taskId } = req.params;
    
    try {
        const data = await Task.destroy({
            where: {
                id: taskId,
            }
        });

        if(data ===0) return res.status(404).send('Task not found');
    
        return res.send({message: `Task ${taskId} deleted successfully`});
    } catch (error) {
        next(error);
    }
};

const updateTask = async(req, res, next) => {
    const { taskId } = req.params;
    const { name, done } = req.body;

    try {
        const data = await Task.update({
            name,
            done,
        }, {
            where: {
                id: taskId,
        }});
        
        if(data[0] === 0) return res.status(404).send('Task not found');

        return res.send({message: `Task ${taskId} updated successfully`});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getUserTasks,
    createTask,
    deleteTask,
    updateTask,
};