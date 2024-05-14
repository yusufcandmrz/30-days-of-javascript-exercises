let year = parseInt(prompt("Enter year"));
let month = prompt("Enter month").toLowerCase();

let daysInMonth;

switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        daysInMonth = 31;
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        daysInMonth = 30;
        break;
    case "february":
        daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log("Wrong input");
        break;
}

if (daysInMonth !== undefined) {
    console.log(`${month} has ${daysInMonth} days`);
}
