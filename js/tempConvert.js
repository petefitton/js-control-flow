var currentTemp;
var currentTempSystem;

var tempConvert = function(currentTemp, currentTempSystem) {
    if (currentTempSystem = 'f') {
        currentTempX = Math.floor((5 / 9) * (currentTemp - 32));
        console.log(currentTemp, "degrees Fahrenheit is", currentTempX, "degrees Celsius/Kelvin")
    }
};

tempConvert(40, 'f');

