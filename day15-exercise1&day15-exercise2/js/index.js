// Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getName() {
        return this.name;
    }
    get getAge() {
        return this.age;
    }
    get getColor() {
        return this.age;
    }
    get getLegs() {
        return this.legs;
    }

    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
    set setColor(color) {
        this.color = color;
    }
    set setLegs(legs) {
        this.legs = legs;
    }

    animalInfo() {
        const info = `animal name -> ${this.getName}, animal age -> ${this.getAge}, animal color -> ${this.getColor}, animal legs -> ${this.getLegs}`
        return info;
    }

    static defaultAnimal() {
        const name = "DefaultName";
        const age = 0;
        const color = "DefaultColor";
        const legs = 0;

        const info = `animal name -> ${name}, animal age -> ${age}, animal color -> ${color}, animal legs -> ${legs}`
        return info;
    }
}

const animal = new Animal("Golge", 1, "Black-Gray", 4);
console.log(animal.animalInfo());

animal.setAge = 2;
console.log(animal.getAge);

console.log(Animal.defaultAnimal());

console.log(`***********************`);

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class

class Dog extends Animal {
    constructor(name, age, color, legs, height) {
        super(name, age, color, legs)
        this.height = height;
    }

    animalInfo() {
        const info = `animal name -> ${this.getName}, animal age -> ${this.getAge}, animal color -> ${this.getColor}, animal legs -> ${this.getLegs}, dog height -> ${this.height}`
        return info;
    }

    static defaultAnimal() {
        const name = "DefaultName";
        const age = 0;
        const color = "DefaultColor";
        const legs = 0;
        const height = 0;

        const info = `animal name -> ${name}, animal age -> ${age}, animal color -> ${color}, animal legs -> ${legs}, dog height -> ${height}`
        return info;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, width) {
        super(name, age, color, legs)
        this.width = width;
    }

    animalInfo() {
        const info = `animal name -> ${this.getName}, animal age -> ${this.getAge}, animal color -> ${this.getColor}, animal legs -> ${this.getLegs}, cat width -> ${this.width}`
        return info;
    }

    static defaultAnimal() {
        const name = "DefaultName";
        const age = 0;
        const color = "DefaultColor";
        const legs = 0;
        const width = 0;

        const info = `animal name -> ${name}, animal age -> ${age}, animal color -> ${color}, animal legs -> ${legs}, cat width -> ${width}`
        return info;
    }
}

const dog = new Dog("Golge", 1, "Black-Gray", 4, 0.75);
console.log(dog.animalInfo());

const cat = new Cat("Golge", 1, "Black-Gray", 4, 0.25);
console.log(cat.animalInfo());