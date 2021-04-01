const express = require('express')
const router = express.Router()
const conn = require('../db')
router.get('/projects/board', async (req, res, next) => {
  const projectQuery = await conn.raw('SELECT * FROM projects WHERE id = ?', [
    1,
  ])
  const columnsQuery = await conn.raw(
    'SELECT * FROM columns WHERE project_id = ?',
    [1]
  )
  const columns = []
  for (let column of columnsQuery.rows) {
    const cards = await conn.raw('SELECT * FROM cards WHERE column_id = ?', [
      column.id,
    ])
    columns.push({ title: column.title, cards: cards.rows })
  }
  res.json({ title: projectQuery.rows[0].title, columns: columns })
})
module.exports = router
