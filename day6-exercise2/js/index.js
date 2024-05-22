const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let string = "";
let stringLenght = 10;
let randomIndex;
let randomChar;

for (let char = 0; char < stringLenght; char++) {
    randomIndex = Math.floor(charset.length * Math.random())
    randomChar = charset[randomIndex];
    string += randomChar;
}

console.log(string);

console.log("********************");

const hexCharset = '0123456789abcdef';

let hexadecimelString = "";

for (let char = 0; char < stringLenght; char++) {
    randomIndex = Math.floor(hexCharset.length * Math.random())
    randomChar = hexCharset[randomIndex];
    hexadecimelString += randomChar;
}

console.log(hexadecimelString);

console.log("********************");

let red;
let green;
let blue;

let index = 1
let value;
while (index <= 3) {
    value = Math.floor(Math.random() * 256);
    switch (index) {
        case 1: red = value; break;
        case 2: green = value; break;
        case 3: blue = value; break;
    }
    index++;
}
console.log(`rgb(${red}, ${green}, ${blue})`);

console.log("********************");

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

const upperCountries = []
countries.forEach(country => { upperCountries.push(country.toUpperCase()) })
console.log(upperCountries);

console.log("********************");

const countriesLenghts = []
countries.forEach(country => { countriesLenghts.push(country.length) })
console.log(countriesLenghts);

console.log("********************");

const newCountries = [];
countries.forEach(country => { newCountries.push([country, country.slice(0, 3).toUpperCase(), country.length]) });
console.log(newCountries)

console.log("********************");

const landCountries = [];
countries.forEach(country => {
    if (country.endsWith("land")) {
        landCountries.push(country);
    }
})
if (landCountries.length > 0) {
    console.log(landCountries);
} else {
    console.log("All these countries are without land");
}

console.log("********************");

const iaCountries = [];
countries.forEach(country => {
    if (country.endsWith("ia")) {
        iaCountries.push(country);
    }
})
if (iaCountries.length > 0) {
    console.log(iaCountries);
} else {
    console.log("All these countries are without ia");
}

console.log("********************");

let biggestCountry = "";
countries.forEach(country => {
    if (country.length > biggestCountry.length) {
        biggestCountry = country;
    }
})
console.log(biggestCountry);

console.log("********************");

const fiveCountries = []
for (let index = 0; index < countries.length; index++) {
    if (countries[index].length == 5) {
        fiveCountries.push(countries[index])
    }
}
console.log(fiveCountries);

console.log("********************");

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

let longestWebTech = "";
webTechs.forEach(webTech => {
    if (webTech.length > longestWebTech.length) {
        longestWebTech = webTech;
    }
})
console.log(longestWebTech);

console.log("********************");

const newWebTechs = [];
webTechs.forEach(webTech => { newWebTechs.push([webTech, webTech.length]) });
console.log(newWebTechs)

console.log("********************");

const mernStack = ["MongoDB", "Express", "React", "Node"]
let stackString = mernStack.map(stack => { return stack[0] }).join("");
console.log(stackString);

console.log("********************");

for (let webTech of webTechs) {
    console.log(webTech);
}

console.log("********************");

const array = ['banana', 'orange', 'mango', 'lemon'];
const reverseArray = [];

let index2 = array.length - 1;
while (index2 >= 0) {
    reverseArray.push(array[index2]);
    index2--;
}
console.log(reverseArray);

console.log("********************");

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for (let index = 0; index < fullStack.length; index++) {
    for (let index2 = 0; index2 < fullStack[index].length; index2++) {
        console.log(fullStack[index][index2]);
    }
}