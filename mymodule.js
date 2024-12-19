const fs = require('fs')
const path = require('path')

function myFilterFunction (directory, ext, callback) {
  fs.readdir(directory, (err, list) => {
    if (err) {
      console.log(err)
      return callback(err)
    } else {
      list = list.filter(file => path.extname(file) === `.${ext}`)
      return callback(null, list)
    }
  })
}

module.exports = myFilterFunction
