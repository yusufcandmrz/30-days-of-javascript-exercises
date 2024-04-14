for (let number = 0; number <= 10; number++) {
    console.log(number);
}

let number1 = 0;
while (number1 <= 10) {
    console.log(number1)
    number1++;
}

let number2 = 0;
do {
    console.log(number2)
    number2++;
} while (number2 <= 10)

console.log("************************")

for (let number = 10; number >= 0; number--) {
    console.log(number)
}

let number3 = 10;

while (number3 >= 0) {
    console.log(number3);
    number3--;
}

let number4 = 10;

do {
    console.log(number4)
    number4--
} while (number4 >= 0);

console.log("************************")

let n = 10;
for (let i = 0; i <= n; i++) {
    console.log(i);
}

console.log("************************")

for (let i = 1; i <= 7; i++) {
    let pattern = "";
    for (let j = i; j > 0; j--) {
        pattern += "#";
    }
    console.log(pattern);
}

console.log("************************")

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

console.log("************************")

console.log(`i      i*2     i*3`);
for (let number = 0; number <= 10; number++) {
    console.log(`${number}      ${number ** 2}        ${number ** 3}`)
}

console.log("************************")

for (let number = 0; number <= 100; number++) {
    if (number % 2 == 0) {
        console.log(number);
    }
}

console.log("************************")

for (let number = 0; number <= 100; number++) {
    if (number % 2 != 0) {
        console.log(number)
    }
}

console.log("************************")

for (let number = 2; number <= 100; number++) {

    let isPrime = true;

    for (let number2 = 2; number2 < number; number2++) {
        if (number % number2 == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) { console.log(number) }
}

console.log("************************")

let total = 0;

for (let number = 0; number <= 100; number++) {
    total += number;
}

console.log(`The sum of all numbers from 0 to 100 is ${total}.`)

console.log("************************")

let evenTotal = 0;
let oddTotal = 0;

for (let number = 0; number <= 100; number++) {
    if (number % 2 == 0) {
        evenTotal += number;
    } else {
        oddTotal += number;
    }
}

console.log(`The sum of all evens from 0 to 100 is ${evenTotal}. And the sum of all odds from 0 to 100 is ${oddTotal}.`)

console.log("************************")

let totalArray = [0, 0];

for (let number = 0; number <= 100; number++) {
    if (number % 2 == 0) {
        totalArray[0] += number;
    } else {
        totalArray[1] += number;
    }
}

console.log(totalArray)

console.log("************************")

const array = []

for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * 11))
}

console.log(array)

console.log("************************")

const array2 = []
let randomNumber;


while (array2.length < 5) {
    randomNumber = Math.floor(Math.random() * 11)
    if (!array2.includes(randomNumber)) {
        array2.push(randomNumber);
    }
}

console.log(array2)

console.log("************************")

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let string = "";
let randomCharacter;

while (string.length < 6) {
    randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
    if (!string.includes(randomCharacter)) {
        string += randomCharacter;
    }
}

console.log(string)