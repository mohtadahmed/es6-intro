function add(first = 10, second = 20){
    const total = first + second;
    return total;
}

const result = add(40, 50);
console.log(result);


function fullName(firstName = 'Harry', lastName = 'Potter'){
    const name = firstName + ' ' + lastName;
    return name;
}

const name = fullName('Harison', 'Jackson');
console.log(name)