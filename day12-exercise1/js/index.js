// Calculate the total annual income of the person from the following text. 
// ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let string = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let numbers = string.match(/\d+/g);

let salary = Number(numbers[0]) * 12;
let annualBonus = Number(numbers[1]);
let onlineCourses = Number(numbers[2]) * 12;

console.log(salary + annualBonus + onlineCourses);

console.log(`**********************`);

// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. 
// Extract these numbers and find the distance between the two furthest particles.

let string2 = "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction."

const numbersString = string2.match(/-?\d+/g);
const numbers2 = [];
numbersString.forEach((number) => { numbers2.push(Number(number)) })
numbers2.sort((a, b) => { return a - b });
console.log(numbers2[numbers2.length - 1] - numbers2[0]);

console.log(`**********************`);

// Write a pattern which identify if a string is a valid JavaScript variable

function is_valid_variable(value) {
    let pattern = /^[a-zA-Z_][a-zA-Z0-9_]*$/g
    value.match(pattern) != null ? console.log("true") : console.log("false");
}

is_valid_variable('first_name')
is_valid_variable('1first_name')
is_valid_variable('first-name')
is_valid_variable('firstname') 