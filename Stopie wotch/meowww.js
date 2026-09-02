const stopwatch = document.getElementById("stopwatch");


let timer = null;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function start(){
    console.log(stopwatch.textContent)
    if (!isRunning){
        timer = setInterval(update, 10);
        startTime = Date.now() - elapsedTime;
        isRunning = true;
    }
}
function stop(){
    if (isRunning){
        isRunning = false;
        clearInterval(timer);
    }
}
function reset(){
    clearInterval(timer);
    stopwatch.textContent = "00:00:00:00"
    startTime = 0;
    elapsedTime = 0;
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime /( 1000 * 3600));
    hours = String(hours).padStart(2, "0");
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    minutes = String(minutes).padStart(2, "0");
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    seconds = String(seconds).padStart(2, "0");
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    milliseconds = String(milliseconds).padStart(2, "0");

    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}

