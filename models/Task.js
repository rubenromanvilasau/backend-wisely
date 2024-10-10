const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Task = sequelize.define(
    'Task',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.BOOLEAN
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        tableName: 'tasks',
        timestamps: true,
    }
);

module.exports = Task; 