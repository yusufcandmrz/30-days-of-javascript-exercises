const date = new Date();
let dateYear = date.getFullYear();
let dateMonth = date.getMonth() + 1;
let dateDay = date.getDate();
let dateHours = date.getHours();
let dateMinutes = date.getMinutes();

if (dateMonth < 10) {
    dateMonth = String("0" + dateMonth);
}
if (dateDay < 10) {
    dateDay = String("0" + dateDay);
}
if (dateHours < 10) {
    dateHours = String("0" + dateHours);
}
if (dateMinutes < 10) {
    dateMinutes = String("0" + dateMinutes);
}

console.log(`${dateYear}-${dateMonth}-${dateDay}    ${dateHours}:${dateMinutes}`);