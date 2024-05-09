// Store you first name, last name, age, country, city in your browser localStorage.

localStorage.setItem("firstName", "Yusuf");
localStorage.setItem("lastName", "Demiroz");
localStorage.setItem("age", 25);
localStorage.setItem("country", "Turkiye");
localStorage.setItem("city", "Istanbul");

console.log(localStorage.getItem("firstName"));
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("city"));

console.log("***************************");

// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.

const student = {
    firstName: "Yusuf",
    lastName: "Demiroz",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
    country: "Turkey",

}

const studentJSON = JSON.stringify(student);
localStorage.setItem("studentJSON", studentJSON);
console.log(localStorage.getItem("studentJSON"));

console.log("***************************");

// Create an object called personAccount. 
// It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
    firstName: "Yusuf",
    lastName: "Demiroz",
    incomes: new Set(),
    expenses: new Set(),
    totalIncome() {
        let totalIncomes = 0;
        this.incomes.forEach(income => { totalIncomes += income });
        return totalIncomes;
    },
    totalExpense() {
        let totalExpense = 0;
        this.expenses.forEach(expense => { totalExpense += expense });
        return totalExpense;
    },
    accountInfo() {
        return `This account is belongs to ${this.firstName} ${this.lastName}, The account's total incomes is ${this.totalIncome()} and total expenses is ${this.totalExpense()}.`;
    },
    addIncome(income) {
        this.incomes.add(income);
    },
    addExpense(expense) {
        this.expenses.add(expense);
    },
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    },
}

personAccount.addIncome(2000);
personAccount.addIncome(1000);
personAccount.addExpense(500);

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

console.log(personAccount.accountInfo());