const net = require('net')
const port = process.argv[2] || 8000

function pad (i) {
  return (i < 10 ? '0' : '') + i
}

const server = net.createServer((socket) => {
  const d = new Date()
  const stringDate = `${pad(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
  socket.write(stringDate)
  socket.end('\n')
}).on('error', (err) => {
  console.log(err)
})

server.listen(port)
