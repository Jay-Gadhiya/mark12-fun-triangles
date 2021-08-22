const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const outputShow = document.querySelector("#output");


function calculateSumOfSqaue(a, b) {
    const sumOfSquare = a*a + b*b;
    return sumOfSquare;
}

function hypotenuseCalculation () {
    const sumOfSquare = calculateSumOfSqaue(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    outputShow.innerText = `The length of hypotenuse is ${lengthOfHypotenuse} cm`;
}


hypotenuseButton.addEventListener("click", hypotenuseCalculation);