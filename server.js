const express = require('express')
const next = require('next')

// Import middleware.
const routes = require('./routes')

// Setup app.
//const app = next( { dev: 'production' !== process.env.NODE_ENV } )
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handle = app.getRequestHandler()
const handler = routes.getRequestHandler( app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})

app.prepare()
  .then(() => {
    const server = express()
    server.use(handler)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })

// app.prepare()
//   .then( () => {
//
//     // Create server.
//     const server = express()
//
//     // Use our handler for requests.
//     server.use( handler )
//
//     // Don't remove. Important for the server to work. Default route.
//     // server.get( '*', ( req, res ) => {
//     //   return handle( req, res )
//     // })
//
//     server.get('/', (req, res) => {
//       app.render(req, res, '/', {})
//     })
//
//     server.get('/jp/:id', (req, res) => {
//       const query = { id: req.params.id }
//       app.render(req, res, '/jp' , query)
//     })
//
//     // Get current port.
//     const port = process.env.PORT || 8080
//
//     // Error check.
//     server.listen( port, err => {
//       if (err) {
//         throw err
//       }
//
//       // Where we starting, yo!
//       console.log( `> Ready on port ${port}...` )
//     })
//   })
