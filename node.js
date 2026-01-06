const display = document.getElementById('display');
let timer = isNaN;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = false;

function start () {
  if(!isRunning){
    startTimer = Date.now() - elapsedTime;
    timer = setInterval(update,10);
    isRunning = true;
  }
}

function stop () {
  (!isRunning);
  timer = clearInterval(timer);
  elapsedTime = Date.now() - startTimer;
  isRunning = false
}

function reset () {
  clearInterval(timer);
  startTimer = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00'
}

function update (){
  Currentime = Date.now();
  elapsedTime = Currentime - startTimer;

  let hours = Math.floor(elapsedTime / (1000*60*60));
  let minutes = Math.floor(elapsedTime / (1000*60))%60;
  let seconds = Math.floor(elapsedTime/ (1000))%60;

  hours = String(hours).padStart(2 ,'0')
  minutes = String(minutes).padStart(2 ,'0');
  seconds = String(seconds).padStart(2 ,'0');

  display.textContent = `${hours}:${minutes}:${seconds}`

}
