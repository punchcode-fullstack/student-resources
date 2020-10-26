const sequelize = require('../db')
// const { Project, User } = require('./index')
const Project = require('./Project')
const User = require('./User')
const { DataTypes } = require('sequelize')
const ProjectsUsers = sequelize.define('projectsUsers', {
    projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Project,
          key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
})
Project.belongsToMany(User, {through: ProjectsUsers})
User.belongsToMany(Project, {through: ProjectsUsers})

module.exports = ProjectsUsers