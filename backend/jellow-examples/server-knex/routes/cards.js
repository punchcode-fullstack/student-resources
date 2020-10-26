const express = require('express')
const router = express.Router()
const conn = require('../db')
router.post('/cards/columns/:columnId', async (req, res) => {
    const card = await conn('cards').insert({description: req.body.description, column_id: req.params.columnId})
    res.json({message: 'card created'})
})
router.patch('/cards/:cardId/columns/:columnId', async (req, res) => {
    const card = await conn('cards').update({column_id: req.params.columnId}).where({id: req.params.cardId})
    res.json({message: 'card moved'})
})
router.delete('/cards/:id', async (req, res) => {
    await conn('cards').where({id: req.params.id}).del()
    res.json({message: 'card deleted'})
})

module.exports = router