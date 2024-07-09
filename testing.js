// example of synchronous call back functions in js

const numbers = [1, 2, 3, 4, 5];

function printSquare(number) {
  console.log(number * number);
}
numbers.forEach(printSquare);

// const numbers1 = [1, 2, 3, 4, 5];

// function printSquare(number) {
//   console.log(number * number);
// }

// for (let i = 0; i < numbers1.length; i++) {
//   printSquare(numbers1[i]);
// }

// function transform(number, callback) {
//   return callback(number);
// }

// function double(n) {
//   return n * 2;
// }

// console.log(transform(5, double));
