const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

console.log(`***********************`)

// Change skills array to JSON using JSON.stringify()

const skillsJSON = JSON.stringify(skills);
console.log(skills)
console.log(skillsJSON)

console.log(`***********************`)

// Stringify the age variable

const ageJSON = JSON.stringify(age);
console.log(typeof age);
console.log(typeof ageJSON)

console.log(`***********************`)

// Stringify the isMarried variable

const isMarriedJSON = JSON.stringify(isMarried);
console.log(typeof isMarried);
console.log(typeof isMarriedJSON);

console.log(`***********************`)

// Stringify the student object

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

console.log(`***********************`)

// Stringify the students object with only firstName, lastName and skills properties

const studentJSON2 = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(studentJSON2);