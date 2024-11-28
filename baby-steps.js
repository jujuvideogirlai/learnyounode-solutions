/*  BABY STEPS (Exercise 2 of 13)   

  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). 

Written by: Júlia Polbach
https://github.com/jujuvideogirlai
*/

let args = process.argv.slice(2);

let sum = args.reduce((accum, number) => {
  return accum + Number(number);
}, 0);

console.log(sum);
