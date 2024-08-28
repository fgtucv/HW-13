const div = document.querySelector(".games-div");
const timerSpan = document.querySelector(".games-timer");
const title = document.querySelector(".games-title");
const scoreSpan = document.querySelector(".games-score");

div.addEventListener("click", startGame);

let timer = 15;
let score = 0;

function startGame() {
    score = 0;
    timer = 15;

    scoreSpan.textContent = score;
    timerSpan.textContent = timer;

    clearInterval(gameInterval);

    const gameInterval = setInterval(() => {
        if (timer > 0) {
            timer = timer - 1;
            timerSpan.textContent = timer;
        } else {
            clearInterval(gameInterval);
            alert(`Ваш час вийшов ви клікнули ${score} разів`);
        }
    }, 1000);
}

function cuontClick() {
    if (timer > 0) {
        score += 1;
        scoreSpan.textContent = score;
    }
}

div.addEventListener("click", cuontClick);
