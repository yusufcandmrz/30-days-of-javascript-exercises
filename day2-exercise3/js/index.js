let string = `Love is the best thing in this world. Some found their love and some are still looking for their love`;
let pattern = /love/gi

console.log(`love count -> ${string.match(pattern).length}`)

console.log(`*********************`);

let string2 = 'You cannot end a sentence with because because because is a conjunction';
let pattern2 = /because/gi;

console.log(`because count -> ${string2.match(pattern2).length}`)

console.log(`*********************`);

let string3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let pattern3 = /[^\w\s]/gi


let cleanedString3 = string3.replace(pattern3, "");
const cleanedArray3 = cleanedString3.split(" ");

let mostFrequentWord = ""
let mostFrequentCount = 0;
let pattern4;


for (let frequentWord of cleanedArray3) {
    let frequentCount = 0;

    for (let i = 0; i < cleanedArray3.length; i++) {
        if (frequentWord == cleanedArray3[i]) {
            frequentCount++;
        }
    }

    if (frequentCount > mostFrequentCount) {
        mostFrequentWord = frequentWord;
        mostFrequentCount = frequentCount;
    }
}

console.log(`most frequent word is -> ${mostFrequentWord} in '${cleanedString3}'`);

console.log(`*********************`);

let string4 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let salaryPerMonthIndex = string4.search('salary per month');
let firstPart = string4.substring(0, salaryPerMonthIndex);
console.log(firstPart);
let salaryPerMonth = Number(firstPart.match(/\d+/g)[0]);
console.log(salaryPerMonth)

let annualBonusIndex = string4.search('annual bonus');
let secondPart = string4.substring(salaryPerMonthIndex, annualBonusIndex);
console.log(secondPart);
let annualBonus = Number(secondPart.match(/\d+/g)[0]);
console.log(annualBonus);

let onlineCoursesPerMonthIndex = string4.search('online courses per month');
let thirdPart = string4.substring(annualBonusIndex, onlineCoursesPerMonthIndex);
console.log(thirdPart);
let onlineCoursesPerMonth = Number(thirdPart.match(/\d+/g)[0]);
console.log(onlineCoursesPerMonth);

console.log(`total -> ${salaryPerMonth * 12 + annualBonus + onlineCoursesPerMonth * 12} euro`)