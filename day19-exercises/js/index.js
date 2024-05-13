// Create a closure which has one inner function

function outerFunc() {
    let count = 0;
    function innerFunc() {
        count++
        return count
    }
    return innerFunc
}

const innerFunc = outerFunc();
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

console.log("*******************");

// Create a closure which has three inner functions

function outerFunc2() {
    let count = 0;
    function increaseCounter() {
        count++;
        return count;
    }
    function decreaseCounter() {
        count--;
        return count;
    }
    function resetCounter() {
        count = 0;
        return count;
    }
    return {
        increaseCounter: increaseCounter,
        decreaseCounter: decreaseCounter,
        resetCounter: resetCounter
    }
}

const innerFuncs = outerFunc2();

console.log(innerFuncs.increaseCounter());
console.log(innerFuncs.increaseCounter());
console.log(innerFuncs.decreaseCounter());
console.log(innerFuncs.resetCounter());

console.log("*******************");

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. 
// It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount() {
    let firstName = "Yusuf";
    let lastName = "Demiroz";
    const incomes = new Set();
    const expenses = new Set();

    function totalIncome() {
        let totalIncome = 0;
        incomes.forEach(income => { totalIncome += income });
        return totalIncome;
    }
    function totalExpense() {
        let totalExpense = 0;
        expenses.forEach(expense => { totalExpense += expense });
        return totalExpense;
    }
    function accountInfo() {
        return `This account belongs to ${firstName + " " + lastName}.`
    }
    function addIncome(income) {
        incomes.add(income);
    }
    function addExpense(expense) {
        expenses.add(expense);
    }
    function accountBalance(){
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        accountInfo: accountInfo,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance,
    }
}

const innerFuncs2 = personAccount();

innerFuncs2.addIncome(500);
innerFuncs2.addIncome(750);
innerFuncs2.addExpense(250);
console.log(innerFuncs2.accountInfo());
console.log(innerFuncs2.totalIncome());
console.log(innerFuncs2.totalExpense());
console.log(innerFuncs2.accountBalance());
