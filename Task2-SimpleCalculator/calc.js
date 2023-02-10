var expression = '';
var num1 = function getNum(num) {
    num = +num || 0
    return num;
}

function press(num1) {
    expression += num1;
    document.getElementById("userInput").value = expression;
}

function equal() {
    document.getElementById("userInput").value = eval(expression);
    expression = '';
}

function erase() {
    expression = '';
    document.getElementById("userInput").value = expression;
}