const sha512 = require('js-sha512')
const { createSalt } = require('./utils/auth')

const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('./db')
const User = require('./models/User')
const Project = require('./models/Project')

// I'd like to note snake casing doesn't seem to work with pivot tables specifically... 

async function main() {
    await User.sync({force: true})
    await User.create({username: 'test', password: sha512('test' + salt), salt: salt})
    await Project.sync({force: true})
    await Project.create({title: 'My new project'})
    // await ProjectsUsers.sync({force: true})
    // await ProjectsUsers.create({userId: 1, projectId: 1})
    // await Column.sync({force: true})
    // await Column.create({title: 'TODO', order: 0, projectId: 1})
    // await Card.sync({force: true})
    // await Card.create({description: 'Card one!', columnId: 1})
    // await CardsUsers.sync({force: true})
    // await CardsUsers.create({userId: 1, projectId: 1})
    // KEPT here as a reference for everything

    // const User = sequelize.define('users', {
    //     username: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     },
    //     password: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     },
    //     salt: {
    //         type: DataTypes.STRING,
    //         allowNull: false
    //     }
    // })
    // const salt = createSalt(20)
    // await User.sync({force: true})
    // await User.create({username: 'test', password: sha512('test' + salt), salt: salt})

    // const Project = sequelize.define('projects', {
    //    title: {
    //        type: DataTypes.STRING,
    //        allowNull: false
    //    } 
    // })
    // await Project.sync({force: true})
    // await Project.create({title: 'My new project'})
    // const ProjectsUsers = sequelize.define('projectsUsers', {
    //     projectId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //           model: Project,
    //           key: 'id'
    //         }
    //     },
    //     userId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //             model: User,
    //             key: 'id'
    //         }
    //     }
    // })
    // await ProjectsUsers.sync({force: true})
    // Project.belongsToMany(User, {through: ProjectsUsers})
    // User.belongsToMany(Project, {through: ProjectsUsers})
    // await ProjectsUsers.create({userId: 1, projectId: 1})
    // const Column = sequelize.define('columns', {
    //     title: {
    //         type: DataTypes.STRING,
    //     },
    //     order: {
    //         type: DataTypes.INTEGER,
    //     },
    //     projectId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //           model: Project,
    //           key: 'id'
    //         }
    //     }
    // })
    // await Column.sync({force: true})
    // Project.hasMany(Column)
    // Column.belongsTo(Project)
    // await Column.create({title: 'TODO', order: 0, projectId: 1})

    // const Card = sequelize.define('cards', {
    //     columnId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //           model: Column,
    //           key: 'id'
    //         }
    //     },
    //     description: {
    //         type: DataTypes.STRING,
    //     }
    // })
    // await Card.sync({force: true})
    // Card.hasOne(Column)
    // Column.hasMany(Card)
    // await Card.create({description: 'Card one!', columnId: 1})
    // const CardsUsers = sequelize.define('cardsUsers', {
    //     cardId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //           model: Card,
    //           key: 'id'
    //         }
    //     },
    //     userId: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //             model: User,
    //             key: 'id'
    //         }
    //     }
    // })
    // await CardsUsers.sync({force: true})
    // Card.belongsToMany(User, {through: CardsUsers})
    // User.belongsToMany(Card, {through: CardsUsers})
    // await CardsUsers.create({cardId: 1, userId: 1})
}

main()