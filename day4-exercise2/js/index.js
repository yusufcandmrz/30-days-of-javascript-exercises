const score = 75;

if (score >= 80 && score <= 100) { console.log(`A`) }
else if (score >= 70 && score < 80) { console.log('B') }
else if (score >= 60 && score < 70) { console.log("C") }
else if (score >= 50 && score < 60) { console.log(`D`) }
else if (score >= 0 && score < 50) { console.log(`F`) }
else { console.log(`wrong score`) };

console.log(`*********************`);

const input = "February"

if (input == "September" || input == "October" || input == "November") { console.log("Autumn") }
else if (input == "December" || input == "January" || input == "February") { console.log("Winter") }
else if (input == "March" || input == "April" || input == "May") { console.log("Winter") }
else if (input == "June" || input == "July" || input == "August") { console.log("Winter") }
else { console.log("wrong input") }

console.log(`*********************`);

let day = "Friday";
day = day.toLowerCase();

if (day == "monday" || day == "tuesday" || day == "wednesda" || day == "thursday" || day == "friday") { console.log(`${day} is a working day`) }
else if (day == "saturday" || day == "sunday") {
    console.log(`${day} is a weekend`)
}