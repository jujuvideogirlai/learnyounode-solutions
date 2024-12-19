'use strict'

const fs = require('fs')
const path = require('path')

const dirPath = process.argv[2]
const ext = process.argv[3]

fs.readdir(dirPath, (err, list) => {
  if (err) return console.error(err)

  list = list.filter(file => path.extname(file) === `.${ext}`)
    .forEach(file => console.log(file))
})
