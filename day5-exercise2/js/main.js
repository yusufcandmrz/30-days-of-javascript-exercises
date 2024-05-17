console.log(countries);
console.log(webTechs);

console.log("*********************");

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const newText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(" ");
console.log(newText);
console.log(newText.length);

console.log("*********************");

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

let item = "Meat";
if (!shoppingCart.includes(item)) {
    shoppingCart.unshift(item);
}
console.log(shoppingCart);

let item2 = "Sugar";
if (!shoppingCart.includes(item2)) {
    shoppingCart.push(item2);
}
console.log(shoppingCart);

let amIAllergicToHoney = false;
if (amIAllergicToHoney) {
    let index = shoppingCart.indexOf("Honey");
    shoppingCart.splice(index, 1);
}
console.log(shoppingCart);

let indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[indexOfTea] = "Green Tea";
console.log(shoppingCart);

console.log("*********************");

if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
}
console.log(countries);

console.log("*********************");

if(webTechs.includes("Sass")){
    console.log("Sass is a CSS preprovess");
} else {
    webTechs.push("Sass");
}
console.log(webTechs);

console.log("*********************");

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);