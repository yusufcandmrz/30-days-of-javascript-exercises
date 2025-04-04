// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const array = [2, 4, 1, 5, 3];
function printArrayElements(array) {
    array.forEach((value) => {console.log(value)})
}
printArrayElements(array);

console.log("*******************************")

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function formattedDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}
function showDateTime() {
    console.log(formattedDate(new Date()));
}
showDateTime();

console.log("*******************************")

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(firstValue, secondValue) {
    let tempValue = firstValue;
    firstValue = secondValue;
    secondValue = tempValue;
    console.log(`x => ${firstValue}, y => ${secondValue}`);
}
swapValues(1, 2);

console.log("*******************************")

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
    const reversedArray = [];
    array.forEach((value) => {
        reversedArray.unshift(value);
    })
    console.log(reversedArray);
}
reverseArray([1, 2, 3, 4, 5]);

console.log("*******************************")

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalArray(array) {
    const capitalizedArray = array.map(element => {
        return element.toUpperCase();
    });
    console.log(capitalizedArray);
}
capitalArray(["y", "u", "s", "u", "f"]);

console.log("*******************************")

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
    const array = [1, 2, 3, 4, 5];
    array.push(item);
    return array;
}
console.log(addItem(6));

console.log("*******************************")

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index) => {
    const array = [1, 2, 3, 4, 5];
    array.splice(index, 1);
    return array;
}
console.log(removeItem(2));

console.log("*******************************")

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
    const array = [1, 2, 3, 4, 5];
    return array.map(element => element + number);
}
console.log(sumOfNumbers(5));

console.log("*******************************")

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return array.map((element) => {return (element % 2 != 0) ? element + number : element})
}
console.log(sumOfOdds(5))

console.log("*******************************")

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return array.map((element) => {return (element % 2 == 0) ? element + number : element})
}
console.log(sumOfEven(5))

console.log("*******************************")

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
    let isEven = (number % 2 == 0) ? true : false;
    let odds = Math.ceil(number / 2);
    let evens = Math.ceil(isEven ? number/2 + 1 : number/2);
    console.log(`The number of odds are ${odds}`)
    console.log(`The number of evens are ${evens}`)
}
evensAndOdds(100);

console.log("*******************************")

// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments(...args) {
    sum = 0;
    args.forEach(element => sum += element);
    console.log(sum);
}
sumOfArguments(1, 2, 3, 4);

console.log("*******************************")

// Writ a function which generates a randomUserIp.
function generateUserIp() {
    userip = "";
    for(i = 0; i < 4; i ++) {
        userip += Math.floor(Math.random() * 256);
        if(i != 3) {
            userip += ".";
        }
    }
    return userip;
}
console.log(generateUserIp())

console.log("*******************************")

// Write a function which generates a randomMacAddress
function generateMacAddress() {
    macAddress = "";
    for(i = 0; i < 6; i ++) {
        macAddress += Math.floor(Math.random() * 256).toString(16).padStart(2, "0");
        if(i != 5) macAddress += ":";
    }
    return macAddress;
}
console.log(generateMacAddress())

console.log("*******************************")

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}
console.log(randomHexaNumberGenerator());

console.log("*******************************")

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
console.log(userIdGenerator())