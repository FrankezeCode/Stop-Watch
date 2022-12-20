// declaration of global variable and getting element from dom
var hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    miliseconds = document.getElementById("miliseconds"),

    startButton = document.getElementById("startButton"),
    pauseButton = document.getElementById("pauseButton"),
    stopButton = document.getElementById("stopButton"),
    resetButton = document.getElementById("resetButton"),

    setTime,
    currentTime,
    difference,
    timer = 0,
    interval;

// declaration of start function that would genenerate output(values) at intervals   
var start = function(){
    setTime = (Date.now())
    interval = setInterval(update, 10);
}

// declaration of pause function that would halt the program
var pause = function(){
    console.log(`pause`)
    clearInterval(interval);
}

// declaration of stop function that would halt the program as well as, taking the value back to zero
var stop = function(){
    console.log(`stop`)
    clearInterval(interval);
    timer = 0;
}

//  declaration of reset function that would restart the program 
var reset = function(){
    console.log(`reset`)
    timer = 0;
    updateScreen();
}

//  declartion of the update function , used to update the screen with the cuurrent value
var update = function(){
    currentTime = (Date.now())
    difference = currentTime - setTime
    timer += difference;

    updateScreen();
    setTime = currentTime;
}

var updateScreen = function(){
var timeRaw = timer/1000,
    timeMiliSeconds = parseInt(((timeRaw % 1)*100)),
    timeSeconds = Math.floor(timeRaw),
    timeMinutes = Math.floor(timeSeconds/60),
    timeHours = Math.floor(timeMinutes/60);

    // this is used to display the output on the page
    miliseconds.innerText =  timeMiliSeconds;
    seconds.innerText = twoDigiter( processSixty(timeSeconds));
    minutes.innerText = twoDigiter(processSixty(timeMinutes));
    hours.innerText =  twoDigiter(timeHours);
}

//  declaration of a two digit function used to convert the output to 2 digit
var twoDigiter = function(number){
    var numstring = number.toString();
    if(numstring.length < 2){
        return "0" + numstring;
    }else{
        return numstring;
    }
}

// declarion of a process function used to ensure the minutes and seconds output is not greeater than 60 
var processSixty = function(number){
    var divisible = Math.floor(number/60);
    if(number/60 >= divisible){
       return number - 60 * divisible;
    }
}

//  Event listeners for each button
    startButton.addEventListener(`click`, start)
    pauseButton.addEventListener(`click`, pause)
    stopButton.addEventListener(`click`, stop)
    resetButton.addEventListener(`click`, reset)