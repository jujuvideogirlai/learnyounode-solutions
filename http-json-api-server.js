'use-strict'
const http = require('http')

const server = http.createServer((req, res) => {
  const url = new URL(`localhost:${req.url}`)
  const param = url.searchParams.get('iso')

  if (url.pathname === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      hour: Number((param.slice(11, 13))) + 1,
      minute: Number(param.slice(14, 16)),
      second: Number(param.slice(17, 19))
    }))
  } else if (url.pathname === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      unixtime: Math.floor(new Date(param))
    }))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])
