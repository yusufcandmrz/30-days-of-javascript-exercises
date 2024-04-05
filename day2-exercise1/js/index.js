let challange = '30 Days Of JavaScript';
console.log(challange);
console.log(challange.length);

console.log("*****************************")

console.log(challange.toUpperCase());
console.log(challange.toLowerCase());

console.log("*****************************")

console.log(challange.slice(0, 1));
let index = challange.search("Days Of JavaScript");
console.log(challange.slice(index, challange.length - 1));

console.log("*****************************")

console.log(challange.includes("Script"));

console.log("*****************************")

const challangeArray = challange.split("");
console.log(challangeArray);
const challangeArrayWithSpace = challange.split(" ");
console.log(challangeArrayWithSpace);

console.log("*****************************")

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArray = companies.split(", ");
console.log(companiesArray);

console.log("*****************************")

console.log(challange.replace("JavaScript", "Python"));

console.log("*****************************")

console.log(challange.charAt(15));
let index2 = challange.search("J");
console.log(challange.charCodeAt(index2));

console.log("*****************************")

console.log(challange.indexOf("a"))
console.log(challange.lastIndexOf("a"))

console.log("*****************************")

let sentence = "You cannot end a sentence with because because because is a conjunction.";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

console.log("*****************************")

let sentence1 = " 30 Days Of JavaScript ";
console.log(sentence1);
console.log(sentence1.trim());

console.log("*****************************")

console.log(challange.startsWith("30 Days Of JavaScript"));
console.log(challange.endsWith("30 Days Of JavaScript"));

console.log("*****************************")

let pattern = /\a+/g
let totalA = challange.match(pattern);
console.log(totalA.length);

console.log("*****************************")

let firstString = "30 Days Of ";
let secondString = "JavaScript";
console.log(firstString.concat(secondString));

console.log("*****************************")

let challange2 = "30 Days Of JavaScript ";
console.log(challange2.repeat(2));


