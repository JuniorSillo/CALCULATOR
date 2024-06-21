// Developed by: Moeketsi Junior Sillo
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLastCharacter(){
    display.value = display.value.slice(0, -1);
}

function deleteAll(){
    display.value = "";
}

function calculatePercentage(){
    display.value = display.value / 100;
}

function calculateSquareRoot(){
    display.value = Math.sqrt(display.value);
}

function calculateCubeRoot(){
    display.value = Math.cbrt(display.value);
}

function calculateSquare(){
    display.value = display.value * display.value;
}

function calculateCube(){
    display.value = display.value * display.value * display.value;
}

function calculateFactorial(){
    let factorial = 1;
    for(let i = 1; i <= display.value; i++){
        factorial *= i;
    }
    display.value = factorial;
}

function calculateLn(){
    display.value = Math.log(display.value);
}

function calculateLog(){
    display.value = Math.log10(display.value);
}

function calculateSin(){
    display.value = Math.sin(display.value);
}

function calculateCos(){
    display.value = Math.cos(display.value);
}

function calculateTan(){
    display.value = Math.tan(display.value);
}

function calculatePi(){
    display.value = Math.PI;
}

function calculateE(){
    display.value = Math.E;
}

function calculateInverse(){
    display.value = 1 / display.value;
}

function calculateSqrt(){
    display.value = Math.sqrt(display.value);
}

function calculateCbrt(){
    display.value = Math.cbrt(display.value);
}

function calculateMod(){
    display.value = display.value % 2;
}

function calculateFactorial(){
    let factorial = 1;
    for(let i = 1; i <= display.value; i++){
        factorial *= i;
    }
    display.value = factorial;
}

function calculateFactorial(){
    let factorial = 1;
    for(let i = 1; i <= display.value; i++){
        factorial *= i;
    }
    display.value = factorial;
}

function calculateFactorial(){
    let factorial = 1;
    for(let i = 1; i <= display.value; i++){
        factorial *= i;
    }
    display.value = factorial;
}

function calculateFactorial(){
    let factorial = 1;
    for(let i = 1; i <= display.value; i++){
        factorial *= i;
    }
    display.value = factorial;
}



function calculate(){
    try{
        display.value = 'Answer: ' + eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}