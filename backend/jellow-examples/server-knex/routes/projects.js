const express = require('express')
const router = express.Router()
const conn = require('../db')
router.get('/projects/board', async (req, res) => {
    const projectId = 1
    const project = await conn.select().table('projects').where('id', projectId)
    const projectColumns = await conn.select().table('columns').where('project_id', project[0].id)
    const columns = []
    for (let column of projectColumns) {
        const cards = await conn.select().table('cards').where('column_id', column.id)
    }
    res.json({id: project[0].id, title: project[0].title, columns})
})
module.exports = router