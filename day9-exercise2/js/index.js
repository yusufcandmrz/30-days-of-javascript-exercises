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
    'Kenya',
]
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

const totalPrice = products.filter((product) => { return typeof product.price == "number" }).map((product) => product.price).reduce((acc, cur) => acc + cur, 0);
console.log(`totalPrice is -> ${totalPrice}`);

console.log("**********************************")

const totalPrice2 = products.reduce((acc, cur) => {
    return acc + (typeof cur.price == "number" ? cur.price : 0);
}, 0);
console.log(`totalPrice2 is -> ${totalPrice2}`);

console.log("**********************************")

function categorizeCountries(arg) {
    const regEx = new RegExp(arg, "gi");
    return countries.filter((country) => country.match(regEx));
}
console.log(`categorizeCountries result -> ${categorizeCountries(`land`)}`);

console.log("**********************************")

function countCountryInitials(arg) {
    const array = [];
    arg.forEach(element => {
        const firstLetter = element[0].toLowerCase();
        let totalLetter = 0;
        for (let i = 0; i < element.length; i++) {
            if (element[i].toLowerCase() == firstLetter) {
                totalLetter++;
            }
        }
        array.push(totalLetter);
    });
    return array;
}
console.log(countCountryInitials(countries));

console.log("**********************************")

function getFirstTenCountries(arg) {
    return arg.slice(0, 10); 
}
console.log(getFirstTenCountries(countries))

console.log("**********************************")

function getLastTenCountries(arg) {
    return arg.slice(arg.length - 10, arg.length);
}
console.log(getLastTenCountries(countries));

console.log("**********************************")

function countLetter(arg) {
    const array = [];
    arg.forEach(element => {
        const charCount = {};
        let maxChar = '';
        let maxCount = 0;

        for (let i = 0; i < element.length; i++) {
            const char = element[i];
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }

        for (const char in charCount) {
            if (charCount[char] > maxCount) {
                maxCount = charCount[char];
                maxChar = char;
            }
        }

        array.push({ char: maxChar, count: maxCount });
    });
    return array;
}
console.log(countLetter(countries));