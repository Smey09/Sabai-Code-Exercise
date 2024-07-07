// Write a function called that takes an array of numbers
// and a callback function that processes each element
// of the array. Use the callback to square each number in the array.
// (map method of array)

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 8];

//call back
function squaredNumbers(numbers, callback) {
  return numbers.map(callback);
}

//check
function anSquare(number) {
  return number * number;
}

const squareAn = squaredNumbers(arrayNumber, anSquare);
console.log(squareAn);
