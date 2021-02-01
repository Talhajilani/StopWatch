var hour = 00
var min = 00
var sec = 00
var milisec = 00
var hourSpan = document.getElementById("hour")
var minSpan = document.getElementById("min")
var secSpan = document.getElementById("sec")
var milisecSpan = document.getElementById("milisec")
var interval;
 
function timer(){
    milisec++
    milisecSpan.innerHTML = milisec
    if(milisec >= 100){
        sec++
        secSpan.innerHTML = sec
        milisec = 00
    }else if(sec >= 60){
        min++
        minSpan.innerHTML = min
        sec = 00
    }else if(min >= 60){
        hour++
        hourSpan.innerHTML = hour
        min = 00
    }
}
function start(){
    var btn = document.getElementById('start').style.display = 'none'
    interval = setInterval(timer , 10);
}
function stop(){
    var btn = document.getElementById('start').style.display = 'inline-block'
    clearInterval(interval);
}
function reset(){
    hour = 0
    min = 0
    sec = 0
    milisec = 0
    hourSpan.innerHTML = hour
    minSpan.innerHTML = min
    secSpan.innerHTML = sec
    milisecSpan.innerHTML = milisec
    stop()
}