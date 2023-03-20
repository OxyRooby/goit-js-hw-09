function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const btnStartEl = document.querySelector("button[data-start]");
const btnStoptEl = document.querySelector("button[data-stop]");
const wrapEl = document.querySelector(".wrap");

wrapEl.style.display = "flex";
wrapEl.style.gap = "20px";
wrapEl.style.justifyContent = "center";

btnStartEl.style.padding = "18px 36px";
btnStartEl.style.fontSize = "36px";
btnStoptEl.style.padding = "18px 36px";
btnStoptEl.style.fontSize = "36px";

let timerId;
btnStartEl.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

btnStoptEl.addEventListener("click", () => {
    clearInterval(timerId);
});