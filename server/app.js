const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log('starting server')

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/gallery', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id, beeId: id }
      console.log('server get')
      app.render(req, res, actualPage, queryParams)
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
