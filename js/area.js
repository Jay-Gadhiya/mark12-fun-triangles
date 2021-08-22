const areaInputs = document.querySelectorAll(".area-input");
const areaButton = document.querySelector("#area-button");
const outputShow = document.querySelector("#output");

function calculateAreaOfTriangle(base, height) {
    const areaOfTriangle = (base * height) / 2;
    return areaOfTriangle;
}

function calculateArea() {
    const TheAreaOfTriangle = calculateAreaOfTriangle(Number(areaInputs[0].value), Number(areaInputs[1].value));

    outputShow.innerText = `The area of the triangle is ${TheAreaOfTriangle} cm²`;

}

areaButton.addEventListener("click", calculateArea);