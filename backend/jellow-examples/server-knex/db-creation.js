// https://stackoverflow.com/questions/28558920/postgresql-foreign-key-syntax

// Users:
// id
// email
// password
// salt

// Projects
// id
// title

// - a user has many projects
// - a project has many users

// Columns
// id
// title
// project_id

// - a project has many columns
// - a column belongs to one project

// Cards
// id
// column_id
// description
// - a column has many cards
// - a card belongs to one column

// - a card has many users
// - a user has many cards

// CardsUser

const sha512 = require('js-sha512')
const conn = require('./db')
const { createSalt } = require('./utils/auth')

// NOTE this order does not matter if cascade deletion is set otherwise this is the order it'd need to be
// due to foreign key reference issue during deletion
const tables = [
    'projects_users',
    'cards_users',
    'users',
    'cards',
    'columns',
    'projects',
]
async function main() {
    for (let table of tables) {
        const hasTable = await conn.schema.hasTable(table)
        if (hasTable) {
            await conn.schema.dropTable(table)
        }
    }
    await conn.schema.createTable(`users`, (table) => {
        table.increments('id')
        table.string('username', 45)
        table.string('password', 128)
        table.string('salt', 20)
    })
    await conn.schema.createTable(`projects`, (table) => {
        table.increments('id')
        table.string('title', 45)
    })
    await conn.schema.createTable(`projects_users`, (table) => {
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('projects.id').onDelete('cascade')
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
    })
    await conn.schema.createTable(`columns`, (table) => {
        table.increments('id')
        table.string('title', 20)
        table.integer('order')
        table.integer('project_id').unsigned()
        table.foreign('project_id').references('projects.id')
    })

    await conn.schema.createTable(`cards`, (table) => {
        table.increments('id')
        table.integer('column_id').unsigned()
        table.foreign('column_id').references('columns.id').onDelete('cascade')
        table.string('description', 20)
    })
    // NOTE: this is something to watch out for on foreign key relationships
    // DELETE FROM cards WHERE id = 1 - update or delete on table "cards" violates foreign key constraint
    // "cards_users_card_id_foreign" on table "cards_users"
    await conn.schema.createTable(`cards_users`, (table) => {
        table.integer('card_id').unsigned()
        table.foreign('card_id').references('cards.id').onDelete('cascade')
        table.integer('user_id').unsigned()
        table.foreign('user_id').references('users.id')
    })
    const salt = createSalt(20)
    await conn('users').insert({username: 'test', password: sha512('test' + salt), salt: salt})
    await conn('projects').insert({title: 'My new project'})
    await conn('projects_users').insert({project_id: 1, user_id: 1})
    await conn('columns').insert({title: 'column 1', order: 0, project_id: 1})
    await conn('cards').insert({column_id: 1, description: 'my first card'})
    await conn('cards_users').insert({card_id: 1, user_id: 1})

    // Testing out the foreign key deletion issues here...
    // await conn.raw(`DELETE FROM cards WHERE id = 1`)

    // board SQL
    process.exit()
}
main()

// respective sql below...

const userSQL = `
CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username varchar(45) not null,
    password varchar(128) not null,
    salt varchar(20) not null
);
`

const projectSQL = `
CREATE TABLE IF NOT EXISTS projects (
    id serial primary key,
    title varchar(45) not null
);
`

const projectsUsersSQL = `
CREATE TABLE IF NOT EXISTS projects_users (
    user_id integer REFERENCES users(id),
    project_id integer REFERENCES projects(id)
);
`

const columnsSQL = `
CREATE TABLE IF NOT EXISTS columns (
    id serial primary key,
    title varchar(20) not null,
    project_id integer REFERENCES projects(id)
);
`

const cardsSQL = `
CREATE TABLE IF NOT EXISTS cards (
    id serial primary key,
    column_id integer REFERENCES columns(id),
    description varchar(20)
);
`

const cardsUsersSQL = `
CREATE TABLE IF NOT EXISTS cards_users (
    card_id integer REFERENCES cards(id),
    user_id integer REFERENCES users(id)
);
`

const userInsertionSQL = `
INSERT INTO users (username, password, salt)
VALUES (?, ?, ?);
`

const projectInsertionSQL = `
INSERT INTO projects (title)
VALUES (?);
`

const projectUsersInsertionSQL = `
INSERT INTO projects_users (project_id, user_id)
VALUES (?, ?);
`

const columnsInsertionSQL = `
INSERT INTO columns (title, project_id)
VALUES (?, ?);
`

const cardsInsertionSQL = `
INSERT INTO cards (column_id, description)
VALUES (?, ?);
`

const cardsUsersInsertionSQL = `
INSERT INTO cards_users (card_id, user_id)
VALUES (?, ?);
`
// process.exit()