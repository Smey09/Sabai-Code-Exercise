// 8. Write a function that could sort a list of numbers in ascending order.
function sortNumbersAscending(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbersAscending(numbers);
console.log(sortedNumbers); // Output: [1, 2, 5, 5, 6, 9]
