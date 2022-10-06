// Find the max number
const max = Math.max(12, 33, 98, 764, 87);
console.log(max);


// Find the max number from an array.

const numbers = [20, 22, 67, 9, 98, 980];
const maxNumber = Math.max(...numbers);
console.log(numbers);
console.log(maxNumber);


// Let's assign the numbers array in a new array called numbers2
const numbers2 = [numbers];
console.log(numbers2)
// it gives the output as numbers2 array is a 2d array of numbers. but we only want the numbers form the numbers array.



// Let's try this using spread operator
const numbers3 = [29, 38, 41, ...numbers, 33, 49, 97, 76];
console.log(numbers3)
// Now this gives an output as a number array. No extra array is here.
// Also we can add numbers before or after of the array value.