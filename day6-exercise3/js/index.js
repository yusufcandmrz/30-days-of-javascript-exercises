const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Copy countries array(Avoid mutation)

const countriesCopy = [...countries];
console.log(countriesCopy);

console.log("*****************")

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

countriesCopy.sort();
console.log(countriesCopy);

console.log("*****************")

console.log(webTechs.sort());
console.log(mernStack.sort());

console.log("*****************")

// Extract all the countries contain the word 'land' from the countries array and print it as array

const landCountries = []
let index;

countries.forEach((country) => {
    if (country.includes("land")) {
        landCountries.push(country);
        index = countries.indexOf(country);
        countries.splice(index, 1);
    }
})
console.log(countries);
console.log(landCountries);

console.log("*****************")

// Find the country containing the hightest number of characters in the countries array

let hightestCountry = "";
for (let country of countries) {
    if (country.length > hightestCountry.length) {
        hightestCountry = country;
    }
}
console.log(hightestCountry);

console.log("*****************")

// Extract all the countries containing only four characters from the countries array and print it as array

const fourCountries = countries.filter((country) => { return country.length == 4 })
console.log(fourCountries);

console.log("*****************")

// Extract all the countries containing two or more words from the countries array and print it as array

const twoOrMoreWordsCountries = countries.filter((country) => { return country.split(" ").length >= 2 })
console.log(twoOrMoreWordsCountries);

console.log("*****************")

// Reverse the countries array and capitalize each country and stored it as an array

const reverseCountries = []
countries.forEach(country => { reverseCountries.unshift(country.toUpperCase()) });
console.log(reverseCountries);