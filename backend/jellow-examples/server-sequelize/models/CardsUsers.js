const sequelize = require('../db')
const { DataTypes } = require('sequelize')
// const { Card, User } = require('./index')
const Card = require('./Card')
const User = require('./User')

const CardsUsers = sequelize.define('cardsUsers', {
    cardId: {
        type: DataTypes.INTEGER,
        references: {
          model: Card,
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
CardsUsers.belongsTo(Card)
CardsUsers.belongsTo(User)
module.exports = CardsUsers