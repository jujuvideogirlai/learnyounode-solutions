'use strict'
const http = require('http')

const url = process.argv[2]

http.get(url, (res) => {
  res.setEncoding('utf8') // returns a string
  res.on('data', console.log)
  res.on('error', console.error)
}).on('error', console.error)
