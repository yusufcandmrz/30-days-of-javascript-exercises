let string = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(string);

console.log("*********************")

let string2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(string2);

console.log("*********************")

console.log(typeof Number("10"));

console.log("*********************")

console.log(Math.round(parseFloat("9.8")));

let python = "python";
let jargon = "jargon";
//console.log("Is python includes on ->", python.includes("on"));
//console.log("Is jargon includes on ->", jargon.includes("on"));
console.log(python.includes("on") && jargon.includes("on"));

console.log("*********************")

let string3 = "I hope this course is not full of jargon.";
console.log(string3.includes("jargon"));

console.log("*********************")

console.log(Math.floor(Math.random() * 101));

console.log("*********************")

console.log(Math.floor(Math.random() * 51) + 50);

console.log("*********************")

console.log(Math.floor(Math.random() * 256));

console.log("*********************")

let string4 = "JavaScript";
let index = Math.floor(Math.random() * (string4.length))
console.log(string4[index]);

console.log("*********************")

let string5 = "1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125";
console.log(string5);

console.log("*********************")

let string6 = "You cannot end a sentence with because because because is a conjunction"
let firstIndex = string6.indexOf("because");
let lastIndex = string6.lastIndexOf(" is");
let subString = string6.substring(firstIndex, lastIndex);
console.log(subString);
