const sequelize = require('../db')
const { DataTypes } = require('sequelize')
// const { Project, Card } = require('./index')
const Project = require('./Project')
const Card = require('./Card')

const Column = sequelize.define('columns', {
    title: {
        type: DataTypes.STRING,
    },
    order: {
        type: DataTypes.INTEGER,
    },
    projectId: {
        type: DataTypes.INTEGER,
        references: {
          model: Project,
          key: 'id'
        }
    }
})

Column.belongsTo(Project)
Column.hasMany(Card)

module.exports = Column