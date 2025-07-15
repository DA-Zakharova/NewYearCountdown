function newYearCountdown() {
    const nyDate = new Date("January 1, 2026 00:00");
    const now = new Date();
    const diff = nyDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        happyNY();
    }
}

let timerID = setInterval(newYearCountdown, 1000);

function happyNY() {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy New Year!!!";
    heading.classList.add("pink");
}

const btn = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");
const icon = document.querySelector("#icon");

btn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        icon.src = "pause.png";
    } else {
        audio.pause();
        icon.src = "play.png";
    }
})