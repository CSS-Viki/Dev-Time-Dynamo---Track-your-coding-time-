const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const hoursToWork = document.getElementById("work-hours");
const btnEl = document.getElementById("btn-enter-resume");
const btnStop = document.getElementById("btn-stop");

let initialHours = +hoursToWork.value;

let hours = initialHours;
let minutes = 0;
let seconds = 0;

let timer = null;

function countDown() {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;

    if (minutes < 0) {
      minutes = 59;
      hours--;

      if (hours < 0) {
        // reset
        hours = initialHours; // Use the initial input value
        minutes = 60;
        seconds = 0;
      }
    }
  }

  // Set leading zero
  let leadingHour = hours < 10 ? "0" + hours.toString() : hours;
  let leadingMinute = minutes < 10 ? "0" + minutes.toString() : minutes;
  let leadingSecond = seconds < 10 ? "0" + seconds.toString() : seconds;

  hourEl.innerText = leadingHour;
  minuteEl.innerText = leadingMinute;
  secondEl.innerText = leadingSecond;
}

btnEl.addEventListener("click", () => {
  if (timer !== null) {
    clearInterval(timer);
  }

  // Update hours only if the timer is stopped
  if (timer === null) {
    hours = +hoursToWork.value;
  }

  timer = setInterval(countDown, 1000);
  hoursToWork.value = "";
});

btnStop.addEventListener("click", () => {
  clearInterval(timer);
});
