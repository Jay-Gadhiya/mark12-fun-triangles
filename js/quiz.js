const quizForm = document.querySelector(".quiz-form");
const outputButton = document.querySelector("#output-button");
const outputShow = document.querySelector("#output");

const answers = ["90", "right angled"];


function calculateScore() {
    let score = 0;
    index = 0;

    const formResult = new FormData(quizForm);

    for (const value of formResult.values()) {
        if (value === answers[index]) {
            score += 1;
        }
        index += 1;
    }

    outputShow.innerText = `Your score is ${score}`;


}

outputButton.addEventListener("click", calculateScore);