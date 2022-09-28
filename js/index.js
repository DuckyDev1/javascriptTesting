
function toggleText(){
    var text = document.getElementById("toggleButton");
    if (text.innerHTML === "Off") {
        text.innerHTML = "On";
    } else {
        text.innerHTML = "Off";
    }
};

function getName(){
    let inputName = document.getElementById("nameBox").value;
    let outputText = document.getElementById("nameOutputText");
    if (inputName == "") {
        outputText.innerHTML = "Please enter a name!"

    } else {
        outputText.innerHTML = "Name: " + inputName;
    }
};

function getAddAnswer(){
    let firstNumber = Number(document.getElementById("first").value);
    let secondNumber = Number(document.getElementById("second").value);
    let sumText = document.getElementById("additionSum");
    if (firstNumber, secondNumber == ""){
        sumText.innerHTML = "Please enter 2 numbers!";
    } else {
        let sum = firstNumber + secondNumber;
        sumText.innerHTML = "The answer is: " + sum; 
    }
};

let count = 0;
function addCounter(){
    count += 1;
    document.getElementById("countSum").innerHTML = count;
};
function resetCounter(){
    count = 0;
    document.getElementById("countSum").innerHTML = count;
};
function subtractCounter(){
    count -= 1;
    document.getElementById("countSum").innerHTML = count;
};