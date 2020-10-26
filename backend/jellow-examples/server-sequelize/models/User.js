const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const User = sequelize.define('users', {
    // Model attributes are defined here
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User