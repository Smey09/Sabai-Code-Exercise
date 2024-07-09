// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const names = ["Sothea", "Sokphol", "Sunteang"];
// const nameLowerCase = names.map((name) => name.toLowerCase());

// console.log(nameLowerCase);

const fruit = ["apple", "banana", "orange", "mango"];
const fruitsWithN = fruit.filter(function (fruitName) {
  return fruitName.includes("n");
});

console.log(fruitsWithN);
