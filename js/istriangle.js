const inputs = document.querySelectorAll(".angle-input");
const triangleButton = document.querySelector("#is-triangle-button");
const outputShow = document.querySelector("#output");

function calculateSumOfAngle(angle1, angle2, angle3) {
    const sumOfAngle = angle1 + angle2 + angle3;
    return sumOfAngle
}


function isTriangle() {
    const sumOfAngle = calculateSumOfAngle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (sumOfAngle === 180) {
        outputShow.innerText = "YaY, the angles form a triangle";
    }

    else {
        outputShow.innerText = "oh oh! the angles don't form a triangle";
    }

}


triangleButton.addEventListener("click", isTriangle);