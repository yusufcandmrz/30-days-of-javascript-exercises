const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

function callbackForNumbers(number) {
    console.log(number);
}

console.log("**************************");

// Use forEach to console.log each country in the countries array.

countries.forEach((country) => { console.log(country) });

console.log("**************************");

// Use forEach to console.log each name in the names array.

names.forEach((firstName) => { console.log(firstName) });

console.log("**************************");

// Use forEach to console.log each number in the numbers array.

numbers.forEach(callbackForNumbers)

console.log("**************************");

// Use map to create a new array by changing each country to uppercase in the countries array.

const newCountries = countries.map((country) => country.toUpperCase());
console.log(newCountries);

console.log("**************************");

// Use map to create an array of countries length from countries array.

const newCountries2 = countries.map((country) => country.length);
console.log(newCountries2);

console.log("**************************");

// Use map to create a new array by changing each number to square in the numbers array

const newNumbers = numbers.map((number) => (number * number));
console.log(newNumbers);

console.log("**************************");

// Use map to change to each name to uppercase in the names array

const newNames = names.map(firstName => firstName.toUpperCase());
console.log(newNames);

console.log("**************************");

// Use map to map the products array to its corresponding prices.

const prices = products.map(product => product.price);
console.log(prices);

console.log("**************************");

// Use filter to filter out countries containing land.

const newCountries3 = countries.filter(country => country.includes("land"));
console.log(newCountries3);

console.log("**************************");

// Use filter to filter out countries having six character.

const newCountries4 = countries.filter(country => country.length == 6);
console.log(newCountries4);

console.log("**************************");

// Use filter to filter out countries containing six letters and more in the country array.

const newCountries5 = countries.filter(country => country => 6);
console.log(newCountries5);

console.log("**************************");

// Use filter to filter out country start with 'E';

const newCountries6 = countries.filter(country => country.startsWith("E"));
console.log(newCountries6);

console.log("**************************");

// Use filter to filter out only prices with values.

const prices2 = products.filter(product => (product.price > 0))
console.log(prices2);

console.log("**************************");

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

function getStringLists(array) {
    const stringArray = []
    for (let item of array) {
        if (typeof item == "string") {
            stringArray.push(item);
        }
    }
    return stringArray;
}

const resultArray = getStringLists(names)
console.log(resultArray);

console.log("**************************");

// Use reduce to sum all the numbers in the numbers array.

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

console.log("**************************");

// Use reduce to concatenate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const newCountries7 = countries.reduce((acc, cur) => acc + ", " + cur, "Estonia");
console.log(`${newCountries7} are north European countries`);

console.log("**************************");

// Use some to check if some names' length greater than seven in names array

console.log(names.some((firstName) => firstName.length > 7));

console.log("**************************");

// Use every to check if all the countries contain the word land

console.log(countries.every((country) => country.includes("land")));

console.log("**************************");

// Use find to find the first country containing only six letters in the countries array

console.log(countries.find(country => country.length == 6));

console.log("**************************");

// Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex(country => country.length == 6))

console.log("**************************");

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country => country == "Norway"));

console.log("**************************");

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country => country == "Russia"));