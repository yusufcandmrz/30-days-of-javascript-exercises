const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

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

ages.sort((a, b) => a - b);
console.log(ages);

let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(`min age -> ${minAge}, max age -> ${maxAge}`)

if (ages.length % 2 == 0) {
    console.log(`medians -> ${ages[Math.floor(ages.length / 2)]} and ${ages[(Math.floor(ages.length / 2)) - 1]}`);
} else {
    console.log(`median -> ${ages[Math.floor(ages.length / 2)]}`)
}

let totalAge = 0;
for (let index = 0; index < ages.length; index++) {
    totalAge += ages[index];
}
let avarageAge = totalAge / ages.length
console.log(`avarage age -> ${avarageAge}`);

console.log(`range of ages -> ${ages[ages.length - 1] - ages[0]}`);

console.log(`min - avarage -> ${Math.abs(ages[0] - avarageAge)}, max - avarage ${Math.abs(ages[ages.length - 1]) - avarageAge}`);

console.log(countries.slice(0, 10));

console.log("************************");

if (countries.length % 2 == 0) {
    console.log(`${countries[Math.floor(countries.length / 2)]} and ${countries[(Math.floor(countries.length / 2)) - 1]}`);
} else {
    console.log(`${countries[Math.floor(countries.length / 2)]}`)
}

console.log("************************");

if (countries.length % 2 == 0) {
    const firstArray = countries.slice(0, Math.floor(countries.length / 2));
    const secondArray = countries.slice(Math.floor(Math.floor(countries.length / 2)));
    console.log(`firstArray -> ${firstArray} and secondArray -> ${secondArray}`);
} else {
    const firstArray = countries.slice(0, Math.floor(countries.length / 2) + 1);
    const secondArray = countries.slice((Math.floor(countries.length / 2) + 1), countries.length);
    console.log(`firstArray -> ${firstArray} and secondArray -> ${secondArray}`);
}