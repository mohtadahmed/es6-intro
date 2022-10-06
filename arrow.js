// Fuction declaration
function add(first, second) {
    const total = first + second;
    return total
}

const result = add(20, 50);
console.log(result);


// Function expression

const addResult = function add2(first, second){
    const total = first + second;
    return total;
}


const result2 = addResult(20, 30);
console.log(result2);


const addReult2 = function add3(first, second) {
    return first + second;   
}

const result3 = addReult2(40, 50);
console.log(result3);


// Arrow Function
const addNew = (first, second) => first + second;

const result4 = addNew(2, 4);
console.log(result4);