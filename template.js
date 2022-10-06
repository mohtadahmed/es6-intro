// try to add multiple line of text in a variable

const multipleLine = "this is the first line of code" + 
"this is the second line of text" +
"this is the third line of the text" +
"and this is the fourth line of the text";

console.log(multipleLine);

// but this variable doesn't print multiple line of text. it just concatinate the stings.
// let's declare another variable of multiple line of strings

const newMultipleLine = "this is the first line of code \n" + 
"this is the second line of text \n" +
"this is the third line of the text \n" +
"and this is the fourth line of the text";

console.log(newMultipleLine);

// it shows the output as in multiple line of text. 
//bt it is an old way to declare multiple line of code in JavaScript

// Let's try this method using ES6.


const multipleLineWithES6 = `This is the first line.
Now adding another line to this string.

Also I want to add another line of text in the same variable.

let's add some more text in the same variable.

This is the last line.!
`

console.log(multipleLineWithES6);


// See...!!!
// It counts all the spaces, enters, and blank spaces and give it to the output.

// The carret sign or the back tik sign (` `) are the reason of counting the multiple lines and blank spaces.
// In ES6 or ECMAScript 6 there were a big update of JavaScript which enables this features.
// The back tik sign are also used to dynamic the sting.


// Let's make a dynamic string.

const firstNumber = 20;
const secondNumber = 50;

const sum = firstNumber + secondNumber;

const summary = "The sum of: " + firstNumber + " and " + secondNumber + " is: " + sum;
console.log(summary);

// This line is dynamic now. but it it much expensive expression also bit difficult.

// Let's try it with ES6

const newSummary = `The sum of: ${firstNumber} and ${secondNumber} is: ${sum}`;
console.log(newSummary);

// The ultimate result is same but the process is much more easier.
// In ES6, a variable can easily be on the string line with out breaking the line.
// The variable just needed to be added within a ${} sign. 