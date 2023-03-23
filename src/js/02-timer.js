
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputDateEl = document.querySelector("#datetime-picker");
const btnEl = document.querySelector("[data-start]");
const timerEl = document.querySelector(".timer");
const styleEl = document.querySelectorAll(".label");

btnEl.disabled = true;

timerEl.style.display = "flex";
timerEl.style.gap = "2px";

styleEl.forEach((el, index) => {

    el.textContent = ":";
    if (index === styleEl.length - 1) {
        el.textContent = "";
    }
});

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0];
        const currentTime = new Date();

        if (selectedDate.getTime() <= currentTime.getTime()) {
            window.alert("Please choose a date in the future");
            btnEl.disabled = true;
        } else {
            btnEl.disabled = false;
        }
    },
};

flatpickr(inputDateEl, options);

function drawCountdown() { 
    const currentTime = new Date();

    let deltaMs = selectedDate.getTime() - currentTime.getTime();
    let deltaObj = convertMs(deltaMs);
  
    for (const key in deltaObj) {
        const el = document.querySelector(`[data-${key}]`);
        el.textContent = deltaObj[key];
    }
};

let timerId;

btnEl.addEventListener("click", (event) => {
    drawCountdown();
    clearInterval(timerId);
    timerId = setInterval(drawCountdown, 1000);    
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

