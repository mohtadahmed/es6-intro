// Arrow Function Declaration
const add = (first, second) => first + second;

const getFullName =  (firstName, lastName) => firstName + ' ' + lastName;

const fullName = getFullName('Aslam', 'Chy');
console.log(fullName);

// Multiple Parameter Arrow Function
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

const result = addAll(2, 3, 4, 5, 6, 7, 8);
console.log(result);


// No Parameter Arrow Function
const getPie = () => 3.1416;


// One Parameter Arrow Function
const doubleIt = (num) => num * 2;


// One Parameter with Simple Version
const fiveTimes = num => num * 5;


// Multiline Arrow Function
// In multi line arrow function we have to return the value if we want to use the value.
// in multi line arrow function, the function work need to be defined into { }.

const doMath = (x, y, z) => {
    const firstAdd = x + y;
    const secondAdd = y + z;
    const multiplyNumber = firstAdd * secondAdd;
    const result = multiplyNumber / 2;
    return result;
}