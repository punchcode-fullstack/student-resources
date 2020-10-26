const sequelize = require('../db')
const { DataTypes } = require('sequelize')
// const { User, CardsUsers, Column } = require('./index')
const User = require('./User')
const CardsUsers = require('./CardsUsers')
const Column = require('./Column')

const Card = sequelize.define('cards', {
    columnId: {
        type: DataTypes.INTEGER,
        references: {
          model: Column,
          key: 'id'
        }
    },
    description: {
        type: DataTypes.STRING,
    }
})
Card.hasOne(Column)
Card.belongsToMany(User, {through: CardsUsers})

module.exports = Card