// Declare a function fullName and it print out your full name.

function fullName() {
    console.log(`Yusuf Demiroz`);
}

fullName();

console.log(`****************************`);

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullNameWithParameters(firstName, lastName) {
    return `${firstName + ` ` + lastName}`;
}

console.log(fullNameWithParameters('Yusuf', `Demiroz`));

console.log(`****************************`);

// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumber(number1, number2) {
    return number1 + number2;
}

console.log(addNumber(1, 2));

console.log(`****************************`);

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
    return length * width;
}

console.log(areaOfRectangle(3, 4));

console.log(`****************************`);

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function petimeterOfRectangle(lenght, width) {
    return 2 * (lenght + width);
}

console.log(petimeterOfRectangle(5, 6));

console.log(`****************************`);

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(lenght, width, height) {
    return lenght * width * height;
}

console.log(volumeOfRectPrism(7, 8, 9));

console.log(`****************************`);

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
    const PI = Math.PI;
    return PI * r * r;
}

console.log(areaOfCircle(10));

console.log(`****************************`);

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (r) => {
    const PI = Math.PI;
    return 2 * PI * r;
}

console.log(circumOfCircle(11));

console.log(`****************************`);

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass, volume) => {
    return mass / volume;
}

console.log(density(12, 13));

console.log(`****************************`);

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => {
    return distance / time
}

console.log(speed(14, 15));

console.log(`****************************`);

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass, gravity = 9.81) {
    return mass * gravity;
}

console.log(weight(16));

console.log(`****************************`);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celcius) {
    return (celcius * (9 / 5)) + 32;
}

console.log(convertCelsiusToFahrenheit(17));

console.log(`****************************`);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. 
// BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more

const bmi = (weight, height) => {
    let result = "";
    let bmi = weight / (height * height)

    if (bmi < 18.5) { result = "Underweight" }
    else if (bmi >= 18.5 && bmi <= 24.9) { result = "Normal weight" }
    else if (bmi > 24.9 && bmi <= 29.9) { result = "Overweight" }
    else { result = "Obese" }

    return result
}

console.log(bmi(17, 18));

console.log(`****************************`);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) => {
    if (month == 12 || (month > 0 && month <= 2)) {
        return "Winter";
    } else if (month > 2 && month <= 5) {
        return "Spring";
    } else if (month > 5 && month <= 8) {
        return "Summer";
    } else if (month > 8 && month <= 11) {
        return "Autumn"
    } else {
        return "Nothing else matters"
    }
}

console.log(checkSeason(19));

console.log(`****************************`);

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (number1, number2, number3) => {
    return Math.max(number1, number2, number3);
}

console.log(findMax(20, 21, 22));