const buttonDOM = document.querySelector("#button");
const inputDOM = document.querySelector("#input");
const informationDOM = document.querySelector("#information");
const headContainerDOM = document.querySelector("#headContainer");
const divContainerDOM = document.querySelector("#divContainer")
buttonDOM.addEventListener("click", () => { handleButtonClick() })

handleButtonClick = () => {
    informationDOM.textContent = "";
    let value = inputDOM.value;
    if (value == "") {
        informationDOM.textContent = "Please enter a number";
    } else {
        if (isNaN(parseInt(value))) {
            informationDOM.textContent = "Please enter a NUMBER";
        } else {
            divContainerDOM.innerHTML = "";
            let number = parseInt(value);
            for (let index = 1; index <= number; index++) {
                let element = document.createElement('span');
                let isPrime = true;

                if (index === 1) {
                    isPrime = false;
                } else {
                    for (let i = 2; i <= Math.sqrt(index); i++) {
                        if (index % i === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }

                element.textContent = index;
                element.style.display = "inline-block";
                element.style.width = "40px";
                element.style.height = "40px";
                element.style.lineHeight = "40px";
                element.style.margin = "5px";
                element.style.textAlign = "center";
                element.style.color = "white";
                element.style.fontSize = "20px";
                element.style.color = "black";

                if (isPrime) {
                    element.style.backgroundColor = "red";
                } else if (index % 2 === 0) {
                    element.style.backgroundColor = "green";
                } else {
                    element.style.backgroundColor = "yellow";
                }

                divContainerDOM.appendChild(element);
            }
        }
    }
    inputDOM.value = "";
}
