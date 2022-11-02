let hours = 00;
let minutes = 00;
let seconds = 00;
let appendSeconds = document.getElementById("seconds");
let appendMinutes = document.getElementById("minutes");
let appendHours = document.getElementById("hours");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let buttonRecord = document.getElementById("button-record");
let interval; // to store timer values

// This function will run when start is clicked

function startTimer() {
  seconds++;

  if (seconds < 9) {
    appendSeconds.innerHTML = "0" + seconds;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }
  if (minutes > 59) {
    hours++;
    appendHours.innerHTML = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }
}

buttonStart.onclick = function () {
  interval = setInterval(startTimer, 1000);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  seconds = "00";
  minutes = "00";
  hours = "00";
  appendHours.innerHTML = hours;
  appendMinutes.innerHTML = minutes;
  appendSeconds.innerHTML = seconds;
};

buttonRecord.onclick = function () {
  let recordedTime = { 'bookOne': {'hours':hours,'minutes':minutes,'seconds':seconds}, 'bookTwo': 2, 'bookThree': 3 };
  
  localStorage.setItem('recordedTime', JSON.stringify(recordedTime));
  
  let retrievedTime = localStorage.getItem('recordedTime');
  
  console.log('retrievedTime: ', JSON.parse(retrievedTime));
};