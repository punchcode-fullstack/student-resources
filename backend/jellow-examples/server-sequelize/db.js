const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('jellow_sequelize', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize