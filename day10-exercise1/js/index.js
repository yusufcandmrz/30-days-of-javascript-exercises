const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set

const emptySet = new Set();
console.log(emptySet);

console.log('******************')

// Create a set containing 0 to 10 using loop

const numberSet = new Set();
for (let number = 0; number <= 10; number++) {
    numberSet.add(number);
}
console.log(numberSet);

console.log('******************')

// Remove an element from a set

numberSet.delete(10);
console.log(numberSet);

console.log('******************')

numberSet.clear();
console.log(numberSet);

console.log('******************')

// Create a set of 5 string elements from array

const stringArray = ['string1', 'string2', 'string3', 'string4', 'string5'];
const stringSet = new Set(stringArray);
console.log(stringSet);

console.log('******************')

// Create a map of countries and number of characters of a country

const countriesArray = [];
for (let index = 0; index < countries.length; index++) {
    countriesArray.push([countries[index], countries[index].length])
}
const countriesMap = new Map(countriesArray);
console.log(countriesMap);