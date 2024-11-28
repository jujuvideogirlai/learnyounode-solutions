/*  
    Write a program that uses a single synchronous filesystem operation to
    read a file and print the number of newlines (\n) it contains to the
    console (stdout), similar to running cat file | wc -l.

    Written by: Júlia Polbach
    https://github.com/jujuvideogirlai
*/
"use strict";
const fs = require("fs");

let length;
const path = process.argv[2];
let buffer = fs.readFileSync(path, "utf8");

length = buffer.split("\n").length - 1;

console.log(length);
