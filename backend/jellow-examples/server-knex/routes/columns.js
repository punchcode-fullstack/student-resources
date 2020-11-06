const express = require('express')
const router = express.Router()
const conn = require('../db')
router.post('/column/projects/:projectId', async (req, res) => {
    // TODO: computer order based on sorted
    const column = await conn('columns').insert({
        title: req.body.title, project_id: req.params.projectId})
    res.json({message: 'column created'})
})
router.get('/column/:columnId', async (req, res) => {
    const { columnId } = req.params
    const column = await conn.select().table('columns').where({id: columnId})
    res.json(column)
})
router.delete('/column/:columnId', async (req, res) => {
    await conn('columns').where({id: req.params.columnId}).del()
    res.json({message: 'column deleted'})
})
module.exports = router