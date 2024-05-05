const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

// Display the countries array as a table

console.table(countries);

console.log("***********************");

// Display the countries object as a table

const countries2 = {
    "Finland": "Helsinki",
    "Sweden": "Stochoolm",
    "Norway": "Oslo"
}

console.table(countries2)

console.log("***********************");

// Use console.group() to group logs

console.group("countries");
console.log(countries);
console.log(countries2);
console.groupEnd("countries");