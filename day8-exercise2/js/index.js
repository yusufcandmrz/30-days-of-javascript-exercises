const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

// Find the person who has many skills in the users object.

const mostSkillsHavePerson = Object.entries(users).reduce((mostSkilled, [key, value]) => {
    return value.skills.length > mostSkilled.skills.length ? { key, skills: value.skills } : mostSkilled;
}, { key: null, skills: [] }).key;
console.log(mostSkillsHavePerson);

console.log("******************")

// Count logged in users, count users having greater than equal to 50 points from the following object.

const loggedInUsers = Object.entries(users).filter(([key, value]) => { return value.isLoggedIn === true });
console.log(loggedInUsers);

const passedUsers = Object.entries(users).filter(([key, value]) => {
    if (value.points >= 50) {
        return [key, value];
    }
})
console.log(passedUsers);

console.log("******************")

// Find people who are MERN stack developer from the users object

const mernStacks = ["MongoDB", "Express", "React", "Node"];
const mernStackDevelopers = Object.entries(users).filter(([key, value]) => {
    return mernStacks.every(mernStack => value.skills.includes(mernStack));
});
console.log(mernStackDevelopers);

console.log("******************")

// Set your name in the users object without modifying the original users object

const Yusuf = {
    email: 'yusuf@yusuf.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: true,
    points: 100
}
const newUsers = { ...users, Yusuf };
console.log(newUsers);

console.log("******************")

// Get all keys or properties of users object

const keys = Object.keys(users);
console.log(keys);

console.log("******************")

// Get all the values of users object

const values = Object.values(users);
console.log(values);

console.log("******************")

// Use the countries object to print a country name, capital, populations and languages.

const countries = {
    X: {
        capital: "CapitalX",
        populations: "PopulationX",
        languages: "LanguageX"
    },
    Y: {
        capital: "CapitalY",
        populations: "PopulationY",
        languages: "LanguageY"
    },
    Z: {
        capital: "CapitalZ",
        populations: "PopulationZ",
        languages: "LanguageZ"
    }
}

Object.entries(countries).forEach(([key, value]) => {
    console.log(`name -> ${key}, capital -> ${value.capital}, populations -> ${value.populations}, languages -> ${value.languages}`)
});