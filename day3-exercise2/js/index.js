// Write a script that prompt the user to enter base and height of the triangle 
// and calculate an area of a triangle (area = 0.5 x b x h). 
// - Enter base: 20
// - Enter height: 10
// - The area of the triangle is 100

/* let base = prompt("Enter base");
let height = prompt("Enter height");
let areaOfTriangle = base * height * (1/2);
console.log(`Area of Triangle -> ${areaOfTriangle}`); */

console.log("****************************************")

// Write a script that prompt the user to enter side a, side b, and side c of the triangle
// and calculate the perimeter of triangle (perimeter = a + b + c)//
// - Enter side a: 5
// - Enter side b: 4
// - Enter side c: 3
// - The perimeter of the triangle is 12

/* let sideA = prompt("Enter sideA");
let sideB = prompt("Enter sideB");
let sideC = prompt("Enter sideC");
let perimeterOfTriangle = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`Perimeter of Triangle -> ${perimeterOfTriangle}`); */

console.log("****************************************")

// Get length and width using prompt 
// and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
/* let length = prompt("Enter length");
let width = prompt("Enter width");
console.log(`Area of Rectangle -> ${Number(length) * Number(width)}`) */

console.log("****************************************")

// Get radius using prompt 
// and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

/* let radius = prompt("Enter radius");
const PI = 3.14
console.log(2 * Number(PI) * Number(radius)) */

console.log("****************************************")

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

let equation = "y = 2x -2";
let slope = 2 / 1;
let yIntercept = 2 * (0) - 2;
let xIntercept = (0 + 2) / 2;
console.log(`Slope -> ${slope}, yIntercept -> ${yIntercept}, xIntercept -> ${xIntercept}`);

console.log("****************************************")

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let slope1 = (10 - 2) / (6 - 2);
console.log(`Slope -> ${slope1}`);

console.log("****************************************")

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = -3
let y = (x) * (x) + 6 * (x) + 9
console.log(`y is ${y}, where x is ${x}}`)

console.log("****************************************")

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// - Enter hours: 40
// - Enter rate per hour: 28
// - Your weekly earning is 1120

/* let hours = prompt("Enter hours");
let ratePerHour = prompt("Enter ratePerHour");
console.log(hours * ratePerHour); */

console.log("****************************************")

// If the length of your name is greater than 7 say, your name is long else say your name is short.

let myName = "Yusuf";
myName.length > 7 ? console.log("Your name is long") : console.log("Your name is short");

console.log("****************************************")

// Compare your first name length and your family name length and you should get this output.//
// - let firstName = 'Asabeneh'
// - let lastName = 'Yetayeh'
// - Your first name, Asabeneh is longer than your family name, Yetayeh

let firstName = "Yusuf";
let lastName = "Demiroz";
let compareResult = firstName.length > lastName.lastIndexOf ? "longer" : "not longer";
console.log(`Your first name, ${firstName} is ${compareResult} than your family name, ${lastName}`);

console.log("****************************************")

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// - let myAge = 250
// - let yourAge = 25
// - I am 225 years older than you.

let myAge = 25;
let yourAge = 20;
console.log(`I am ${myAge - yourAge} older than you`);

console.log("****************************************")

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// - Enter birth year: 1995
// - You are 25. You are old enough to drive//
// - Enter birth year: 2005
// - You are 15. You will be allowed to drive after 3 years.

/* let currentYear = Number(2024);
let birthYear = Number(prompt("Enter birthYear"));
(currentYear - birthYear) >= 18 ? console.log("You are old enough to drive") : console.log(`You will be allowed to drive after ${18 - (currentYear - birthYear)} years`); */

console.log("****************************************")

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// - Enter number of years you live: 100
// - You lived 3153600000 seconds.

/* let year = prompt("Enter number of years you live");
let seconds = year * 31536000;
console.log(`You lived ${seconds} seconds`); */

console.log("****************************************")

// Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
console.log(`${year}-${month}-${day}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);