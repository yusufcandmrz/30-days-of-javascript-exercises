const firstP = document.querySelector('p');
console.log(firstP);

console.log("***************");

const firstPById = document.querySelector('#first-p');
const secondPById = document.querySelector('#second-p');
const thirdPById = document.querySelector('#third-p');
const fourthPById = document.querySelector('#fourth-p');

console.log(firstPById);
console.log(secondPById);
console.log(thirdPById);
console.log(fourthPById);

console.log("***************");

const pAll = document.querySelectorAll('p');
pAll.forEach((p) => { console.log(p) });

console.log("***************");

pAll.forEach((p) => { console.log(p.textContent) })

console.log("***************");

fourthPById.textContent = "Fourth Paragraph";
console.log(fourthPById);

console.log("***************");

firstPById.setAttribute('class', 'newP');
firstPById.id = "new-first-p";

secondPById.setAttribute('class', 'newP');
secondPById.id = "new-second-p";

thirdPById.setAttribute('class', 'newP');
thirdPById.id = "new-third-p";

fourthPById.setAttribute('class', 'newP');
fourthPById.id = "new-fourth-p";

pAll.forEach((p) => { console.log(p) });
