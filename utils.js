let record = [];
let h = 0;
let m = 0;
let s = 0;
let ms = 0;

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timerDisplay");
let recordedTimerRef = document.querySelector(".retrieveTimeDisplay");
let int = null;

function displayTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  hours < 10 ? (h = "0" + hours) : (h = hours);
  minutes < 10 ? (m = "0" + minutes) : (m = minutes);
  seconds < 10 ? (s = "0" + seconds) : (s = seconds);
  milliseconds < 10
    ? (ms = "00" + milliseconds)
    : (ms =
        milliseconds < 100 ? (ms = "0" + milliseconds) : (ms = milliseconds));

  timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

// document.getElementById("recordTimer").addEventListener("click", () => {
//   // record.push([h, m, s, ms]);
//   // localStorage.setItem("recordedTime", JSON.stringify(record));
//   let recordedTime = { hours: h, minutes: m, seconds: s, miliseconds: ms };
//   localStorage.setItem("recordedTime", JSON.stringify(recordedTime));
// });

// document.getElementById("retrieveTime").addEventListener("click", () => {
//   // let retrievedTime = localStorage.getItem("recordedTime", JSON.parse(record));
//   // console.log(retrievedTime);
//   let retrievedTime = localStorage.getItem("recordedTime");
//   console.log("retrievedTime: ", JSON.parse(retrievedTime));
//   recordedTimerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
// });

// document.getElementById("startRTimer").addEventListener("click", () => {
//   setInterval(recordedTimer, 10);
// });

function recordedTimer() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  hours < 10 ? (h = "0" + hours) : (h = hours);
  minutes < 10 ? (m = "0" + minutes) : (m = minutes);
  seconds < 10 ? (s = "0" + seconds) : (s = seconds);
  milliseconds < 10
    ? (ms = "00" + milliseconds)
    : (ms =
        milliseconds < 100 ? (ms = "0" + milliseconds) : (ms = milliseconds));

  recordedTimerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("startTimer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
  let retrievedTime = localStorage.getItem("recordedTime");
  console.log("retrievedTime: ", JSON.parse(retrievedTime));
  recordedTimerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
  // setInterval(recordedTimer);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  clearInterval(int);
  let recordedTime = { hours: h, minutes: m, seconds: s, miliseconds: ms };
  localStorage.setItem("recordedTime", JSON.stringify(recordedTime));
  console.log(recordedTime);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  clearInterval(int);
  // [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000 ";
});
