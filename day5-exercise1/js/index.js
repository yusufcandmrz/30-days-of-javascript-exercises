const emptyArray = new Array();
console.log(emptyArray);

console.log("***************************")

const array = ["Number 1", "Number 2", "Number 3", "Number 4", "Number 5"];
console.log(array);
console.log(array.length);
console.log(`First item of array -> ${array[0]}
Middle item of array -> ${array[Math.ceil(array.length / 2) - 1]}
Last item of array -> ${array[array.length - 1]}`)

console.log("***************************")

const mixedDataTypes = [
    "Yusuf",
    "Demiroz",
    25,
    true,
    { country: "Turkey", city: "Istanbul" },
    { hobies: ["Playing games", "Reading books", "Watching movies", "Writing codes"] }
]
console.log(mixedDataTypes.length);

console.log("***************************")

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies)
console.log(itCompanies.length);
console.log(`First company -> ${itCompanies[0]}
Middle company -> ${itCompanies[Math.ceil(itCompanies.length / 2) - 1]}
Last company -> ${itCompanies[itCompanies.length - 1]}`)
console.log(itCompanies[0] + "\n" +
    itCompanies[1] + "\n" +
    itCompanies[2] + "\n" +
    itCompanies[3] + "\n" +
    itCompanies[4] + "\n" +
    itCompanies[5] + "\n" +
    itCompanies[6]
)

/* itCompanies[0] = itCompanies[0].toUpperCase();
itCompanies[1] = itCompanies[1].toUpperCase();
itCompanies[2] = itCompanies[2].toUpperCase();
itCompanies[3] = itCompanies[3].toUpperCase();
itCompanies[4] = itCompanies[4].toUpperCase();
itCompanies[5] = itCompanies[5].toUpperCase();
itCompanies[6] = itCompanies[6].toUpperCase();

console.log(itCompanies[0] + "\n" + 
itCompanies[1] + "\n" +
itCompanies[2] + "\n" +
itCompanies[3] + "\n" +
itCompanies[4] + "\n" +
itCompanies[5] + "\n" +
itCompanies[6]
) */

console.log(`${itCompanies.toString()} are big IT companies.`);

itCompanies.includes("Amazon") ? console.log(itCompanies[itCompanies.indexOf("Amazon")]) : console.log("Company is not found");

const filteredCompanies = [];
let pattern = /o/gi;
let company1 = itCompanies[0];
let company2 = itCompanies[1];
let company3 = itCompanies[2];
let company4 = itCompanies[3];
let company5 = itCompanies[4];
let company6 = itCompanies[5];
let company7 = itCompanies[6];
if (company1.match(pattern) != null && company1.match(pattern).length > 1) { filteredCompanies.push(company1) }
if (company2.match(pattern) != null && company2.match(pattern).length > 1) { filteredCompanies.push(company2) }
if (company3.match(pattern) != null && company3.match(pattern).length > 1) { filteredCompanies.push(company3) }
if (company4.match(pattern) != null && company4.match(pattern).length > 1) { filteredCompanies.push(company4) }
if (company5.match(pattern) != null && company5.match(pattern).length > 1) { filteredCompanies.push(company5) }
if (company6.match(pattern) != null && company6.match(pattern).length > 1) { filteredCompanies.push(company6) }
if (company7.match(pattern) != null && company7.match(pattern).length > 1) { filteredCompanies.push(company7) }
console.log(filteredCompanies)

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(itCompanies.length - 3))

console.log(itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 2))

itCompanies.shift();
console.log(itCompanies)

itCompanies.splice(Math.ceil(itCompanies.length / 2 - 1), Math.floor(itCompanies.length / 2 - 1));
console.log(itCompanies)

itCompanies.pop();
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);