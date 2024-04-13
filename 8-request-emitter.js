const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('welcome')
// })

// Using the event emitter API

const server = http.createServer()

server.on('request', (req, res) => {
  res.end('welcome')
})
// emits request event

// subscribe to it / listen for it / respond to it

server.listen(3000, () => {
  console.log('listening on port 3000')
})