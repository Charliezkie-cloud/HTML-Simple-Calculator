/*

If dli mo familiar sa javascript refer ani: https://www.w3schools.com/js/js_intro.asp

And if familiar and naay basic understanding pero dli familiar sa classes like "document" and functions like "getElementById()" refer ani: https://www.w3schools.com/js/js_htmldom.asp

*/

const mainInput = document.getElementById("mainInput");

var firstOperand = 0;
var operator = "";
var secondOperand = 0;

function insertValue(value) {
    mainInput.value += value;
}

function addOperator(value) {
    const inputValue = mainInput.value;

    if (isNaN(inputValue)) {
        return console.log("You can't add characters together.");
    }

    firstOperand = Number(inputValue);
    operator = value;
    mainInput.value = "";
}

function clearInput() {
    mainInput.value = "";
}

function allClear() {
    mainInput.value = "";
    firstOperand = 0;
    operator = "";
    secondOperand = 0;
}

function equals() {
    const value = mainInput.value;

    if (isNaN(value)) {
        return console.log("You can't add characters together.");
    }

    switch (operator) {
        case "+":
            secondOperand = Number(value);
            mainInput.value = eval(firstOperand + operator + secondOperand);
            break;
        case "-":
            secondOperand = Number(value);
            mainInput.value = eval(firstOperand + operator + secondOperand);
            break;
        case "*":
            secondOperand = Number(value);
            mainInput.value = eval(firstOperand + operator + secondOperand);
            break;
        case "/":
            secondOperand = Number(value);
            mainInput.value = eval(firstOperand + operator + secondOperand);
            break;
    }

    firstOperand = 0;
    operator = "";
    secondOperand = 0;
}
