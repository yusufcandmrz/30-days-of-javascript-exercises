const headContainerDOM = document.querySelector('#headContainer');
const divContainerDOM = document.querySelector('#divContainer');

// ***************************

divContainerDOM.style.backgroundColor = "black";
divContainerDOM.style.display = "flex";
divContainerDOM.style.flexWrap = "wrap";
divContainerDOM.style.justifyContent = "space-around";
divContainerDOM.style.marginLeft = "auto";
divContainerDOM.style.marginRight = "auto";
divContainerDOM.style.width = "45%"

// ***************************

const titleElement = document.createElement('h1');
titleElement.textContent = "Number Generator";
titleElement.style.textAlign = "center";

const subTitleElement = document.createElement('h3');
subTitleElement.textContent = "30DaysOfJavaScript: DOM Day 2";
subTitleElement.style.textAlign = "center";
subTitleElement.style.textDecoration = "underline";

const subTitleElement2 = document.createElement('h3');
subTitleElement2.textContent = "Author: Yusuf Demiroz";
subTitleElement2.style.textAlign = "center";
subTitleElement2.style.textDecoration = "underline";

headContainerDOM.appendChild(titleElement);
headContainerDOM.appendChild(subTitleElement);
headContainerDOM.appendChild(subTitleElement2);

// ***************************

let count = 0;

for (let value = 1; value <= 100; value++) {
    let currentNumber = value;
    let number = document.createElement('span');
    let isPrime = true;

    if (currentNumber === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(currentNumber); i++) {
            if (currentNumber % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    number.textContent = value;
    number.style.display = "inline-block";
    number.style.width = "40px";
    number.style.height = "40px";
    number.style.lineHeight = "40px";
    number.style.margin = "5px";
    number.style.textAlign = "center";
    number.style.color = "white";
    number.style.fontSize = "20px";
    number.style.color = "black";

    if (isPrime) {
        number.style.backgroundColor = "red";
    } else if (currentNumber % 2 === 0) {
        number.style.backgroundColor = "green";
    } else {
        number.style.backgroundColor = "yellow";
    }

    divContainerDOM.appendChild(number);
}
