// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it 
// and use the typeof operator to check different data types.

let firstName = "Yusuf";
let lastName = "Demiroz";
let country = "Turkey";
let city = "Istanbul";
let age = 25;
let isMarried = false;
let year = 2024;

console.log(`typeof ${firstName} -> ${typeof firstName}\n
typeof ${lastName} -> ${typeof lastName}\n
typeof ${country} -> ${typeof country}\n
typeof ${city} -> ${typeof city}\n
typeof ${age} -> ${typeof age}\n
typeof ${isMarried} -> ${typeof isMarried}\n
typeof ${year} -> ${typeof year}`);

console.log("**********************");

// Check if type of '10' is equal to 10

console.log(typeof '10' == typeof 10);

console.log("**********************");

// Check if parseInt('9.8') is equal to 10

console.log(parseInt("9.8") == 10);

console.log("**********************");

// Boolean value is either true or false.
// - Write three JavaScript statement which provide truthy value.
// - Write three JavaScript statement which provide falsy value.

let isTrue = true;
isTrue ? console.log("JavaScript - JavaScript - JavaScript") : ("");
isTrue = false;
isTrue ? console.log("") : console.log("Javascript - Javascript - Javascript");

console.log("**********************");

// Figure out the result of the following comparison expression first without using console.log(). 
// After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

console.log(`${4 > 3} should true \n
${4 >= 3} should true \n
${4 < 3} should false \n
${4 <= 3} should false \n
${4 == 4} should true \n
${4 === 4} should true \n
${4 != 4} should false \n
${4 !== 4} should false \n
${4 != 4} should false \n
${4 == '4'} should true \n
${4 === '4'} should false \n`)

let lengthOfPython = "python".length;
let lenghtOfJargon = "jargon".length;

console.log(lengthOfPython != lenghtOfJargon);

console.log("**********************");

// Figure out the result of the following expressions first without using console.log(). 
// After you decide the result confirm it by using console.log()
// - 4 > 3 && 10 < 12
// - 4 > 3 && 10 > 12
// - 4 > 3 || 10 < 12
// - 4 > 3 || 10 > 12
// - !(4 > 3)
// - !(4 < 3)
// - !(false)
// - !(4 > 3 && 10 < 12)
// - !(4 > 3 && 10 > 12)
// - !(4 === '4')
// - There is no 'on' in both dragon and python

console.log(`${4 > 3 && 10 < 12} should true \n
${4 > 3 && 10 > 12} should false \n
${4 > 3 || 10 < 12} should true \n
${4 > 3 || 10 > 12} should true \n
${!(4 > 3)} should false \n
${!(4 < 3)} should true \n
${!(false)} should true \n
${!(4 > 3 && 10 < 12)} should false \n
${!(4 > 3 && 10 > 12)} should true \n
${!(4 === '4')} should true \n`)

let dragon = "dragon";
let python = "python";
console.log(dragon.includes("on") && python.includes("on"));

console.log("**********************");

// Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
console.log(`Year -> ${date.getFullYear()} \n
Month -> ${date.getMonth() + 1} \n
Day -> ${date.getDate()} \n
Day of Week -> ${date.getDay()} \n
Hours -> ${date.getHours()} \n
Minutes -> ${date.getMinutes()}`)

console.log(new Date().getTime());