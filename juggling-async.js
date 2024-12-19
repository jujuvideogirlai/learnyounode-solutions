'use strict'

const http = require('http')
const bl = require('bl')

const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
const finalData = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(finalData[i])
  }
}
function httpGet(index) {
  http.get(process.argv[2 + index], (res) => {
    res.pipe(
      bl((err, data) => {
        if (err) console.error(err)
          finalData[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
      }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}
  