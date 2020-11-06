const express = require('express')
const router = express.Router()
const conn = require('../db')
router.get('/projects/board', async (req, res) => {
    const projectId = 1
    const project = await conn.select().table('projects').where('id', projectId)
    const projectColumns = await conn.raw(`SELECT * FROM columns WHERE project_id = ?`, [1])
    const columnsData = projectColumns.rows
    for (let column of columnsData) {
        const cards = await conn.select().table('cards').where('column_id', column.id)
        columns.cards = cards
    }
    res.json({id: project[0].id, title: project[0].title, columns})
})
module.exports = router