"use strict";
const fs = require("fs");

const path = process.argv[2];
let length;

fs.readFile(path, "utf-8", (err, data) => {
  length = data.split("\n").length - 1;
  console.log(length);
});
