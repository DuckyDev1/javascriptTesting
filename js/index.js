function toggleText() {
    var text = document.getElementById("toggleButton");
    if (text.innerHTML === "Off") {
        text.innerHTML = "On";
    } else {
        text.innerHTML = "Off";
    }
}

function getName() {
    let inputName = document.getElementById("nameBox").value;
    inputName = inputName.trim();
    let outputText = document.getElementById("nameOutputText");
    let nameLength = inputName.length;

    if (inputName == "") {
        outputText.innerHTML = "Please enter a name!";
    } else {
        document.getElementById("uppercaseBtn").style.display = "inline";
        document.getElementById("lowercaseBtn").style.display = "inline";
        document.getElementById("normalBtn").style.display = "inline";

        outputText.innerHTML =
            "Name: " + inputName + ", Length: " + nameLength + " characters";
    }
}

function uppercase() {
    let inputName = document.getElementById("nameBox").value;
    let outputText = document.getElementById("nameOutputText");
    let nameLength = inputName.length;

    inputName = inputName.trim();
    inputName = inputName.toUpperCase();

    outputText.innerHTML =
        "Name: " + inputName + ", Length: " + nameLength + " characters";
}

function lowercase() {
    let inputName = document.getElementById("nameBox").value;
    let outputText = document.getElementById("nameOutputText");
    let nameLength = inputName.length;

    inputName = inputName.trim();
    inputName = inputName.toLowerCase();

    outputText.innerHTML =
        "Name: " + inputName + ", Length: " + nameLength + " characters";
}

function normal() {
    let inputName = document.getElementById("nameBox").value;
    let outputText = document.getElementById("nameOutputText");
    let nameLength = inputName.length;

    outputText.innerHTML =
        "Name: " + inputName + ", Length: " + nameLength + " characters";
}

function getAddAnswer() {
    let firstNumber = Number(document.getElementById("firstAdd").value);
    let secondNumber = Number(document.getElementById("secondAdd").value);
    let sumText = document.getElementById("additionSum");
    if ((firstNumber, secondNumber == "")) {
        sumText.innerHTML = "Please enter 2 numbers!";
    } else {
        let sum = firstNumber + secondNumber;
        sumText.innerHTML = "The answer is: " + sum;
    }
}

let count = 0;
function addCounter() {
    count += 1;
    document.getElementById("countSum").innerHTML = count;
}
function resetCounter() {
    count = 0;
    document.getElementById("countSum").innerHTML = count;
}
function subtractCounter() {
    count -= 1;
    document.getElementById("countSum").innerHTML = count;
}

function getRanNum() {
    let max = document.getElementById("max").value;
    let answer = document.getElementById("ranAnswer");
    if (max == "") {
        answer.innerHTML = "Please enter a max number!";
    } else {
        let ranNum = Math.floor(Math.random() * max) + 1;
        answer.innerHTML = ranNum;
    }
}

let toggleCheckBox = document.getElementById("checkBoxToggle")
let checkText = document.getElementById("checkText")

if (toggleCheckBox.checked == true) {
    checkText.innerHTML = "On";
} else {
    checkText.innerHTML = "Off";
}
