const input = document.querySelector(".control-input");
const button = document.querySelector(".control-button");

button.addEventListener("click", timer)

function timer() {
    const time = input.value;

    setTimeout(() => {
        alert("Ваш час вийшов");
    }, time);
}