
function deez(){
    let deezText = document.getElementById("p1");
    if(deezText.innerHTML = "Off"){
        deezText.innerHTML = "On";
    }
    else {
        deezText.innerHTML = "Off";
    };
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
    let sum = firstNumber + secondNumber;

    sumText.innerHTML = "The answer is: " + sum;
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