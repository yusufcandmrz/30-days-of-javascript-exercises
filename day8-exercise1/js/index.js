// Create an empty object called dog

const dog = {};

console.log("****************");

// Print the the dog object on the console

console.log(dog);

console.log("****************");

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "shadow";
dog.legs = 4;
dog.color = "black";
dog.bark = function () {
    return "woof woof";
}

console.log("****************");

console.log(`dog's name -> ${dog.name} 
dog's legs -> ${dog.legs}
dog's color -> ${dog.color}
dog's bark -> ${dog.bark()}`)

console.log("****************");

dog.breed = "siberian husky";
dog.getDogInfo = `dog's name -> ${dog.name}
dog's legs -> ${dog.legs}
dog's color -> ${dog.color}
dog's bark -> ${dog.bark()}
dog's breed -> ${dog.breed}`;

console.log(dog.getDogInfo)