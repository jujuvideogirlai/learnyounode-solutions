const http = require('http')
const map = require('through2-map')

const upperCaserer = map(function (chunk) {
  return chunk.toString().toUpperCase()
})

const server = http.createServer((req, res) => {
  if (req.method == 'POST') {
    req.pipe(upperCaserer).pipe(res)
  }
})

server.listen(process.argv[2])
