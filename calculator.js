// calculator.js

let currentInput = '';
let result = '';
let operator = '';

function appendToResult(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    if (currentInput === '') {
        return;
    }

    try {
        result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}

function clearResult() {
    currentInput = '';
    result = '';
    document.getElementById('result').value = '';
}
