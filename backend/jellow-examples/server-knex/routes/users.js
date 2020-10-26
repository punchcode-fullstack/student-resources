const express = require('express')
const router = express.Router()
const conn = require('../db')

router.get('/users/projects/:projectId', async (req, res) => {
    const users = await conn.raw(
        `
        SELECT * FROM projects_users
        INNER JOIN users
        ON users.id = projects_users.user_id WHERE project_id = ?`, [req.params.projectId]
    )
    res.json(users.rows)
})
router.post('/users/:userId/projects/:projectId', async (req, res) => {
    await conn('projects_users').insert({project_id: req.params.projectId, user_id: req.params.userId})
    res.json({message: 'user added to project'})
})
router.post('/users/:userId/cards/:cardId', async (req, res) => {
    await conn('cards_users').insert({card_id: req.params.cardId, user_id: req.params.userId})
    res.json({message: 'user added to card'})
})
module.exports = router