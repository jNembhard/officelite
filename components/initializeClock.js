function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 3600000) % 24);
  const days = Math.floor(total / 86400000);

  return { total, days, hours, minutes, seconds };
}

export default function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(".days");
  const hoursSpan = clock.querySelector(".hours");
  const minutesSpan = clock.querySelector(".minutes");
  const secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    const time = getTimeRemaining(endtime);

    daysSpan.innerHTML = time.days;
    hoursSpan.innerHTML = ("0" + time.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + time.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock();
  const timeInterval = setInterval(updateClock, 1000);
}
