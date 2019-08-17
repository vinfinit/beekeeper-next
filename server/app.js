const express = require('express')
require('express-async-errors');
const next = require('next')
const fetch = require('isomorphic-unfetch');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log('starting server')

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/search', async (req, res) => {
      const queryParams = { q: req.params.q, page: req.params.page }
      const tvRes = await fetch('https://api.tvmaze.com/search/shows?q=batman')
      const data = await tvRes.json()
      res.json(data)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
