const sequelize = require('../db')
const { DataTypes } = require('sequelize')
// const { Column } = require('./index')
const Column = require('./Column')
const User = require('./User')

const Project = sequelize.define('projects', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    } 
})

Project.hasMany(Column)
Project.hasMany(User)
module.exports = Project