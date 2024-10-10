const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Task = require('./Task');

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'users',
        timestamps: true,
    }
);

User.hasMany(Task, {
    foreignKey: 'user_id',
    as: 'tasks'
});

Task.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

module.exports = User
