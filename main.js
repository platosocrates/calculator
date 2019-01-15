// operator functions

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}


// operate function takes operator and numbers as arguments

function operate(operator,a,b) {
    return operator(a,b);
}


// create the display variable

let displayValue;


// function stores data in display screen
let displayScreen = document.querySelector('#display');

function addTextToDisplay() {
    displayScreen.textContent += displayValue;
}


// function deletes all data on display screen

function deleteTextFromDisplay() {
    displayScreen.textContent = null;
}


// numerals on click 

let numerals = document.querySelectorAll('.numerals');

numerals.forEach((numeral) => {
    
    numeral.addEventListener('click', (e) => {
        switch (numeral.id) {
            case 'one': displayValue = 1; 
            addTextToDisplay();
            break;
            case 'two': displayValue = 2; 
            addTextToDisplay();
            break;
            case 'three': displayValue = 3; 
            addTextToDisplay();
            break;
            case 'four': displayValue = 4; 
            addTextToDisplay();
            break;
            case 'five': displayValue = 5; 
            addTextToDisplay();
            break;
            case 'six': displayValue = 6; 
            addTextToDisplay();
            break;
            case 'seven': displayValue = 7; 
            addTextToDisplay();
            break;
            case 'eight': displayValue = 8; 
            addTextToDisplay();
            break;
            case 'nine': displayValue = 9; 
            addTextToDisplay();
            break;
            case 'zero': displayValue = 0; 
            addTextToDisplay();
            break;    
        }
    });
});


// miscellaneous on click

let misc = document.querySelectorAll('.misc');

misc.forEach((button) => {

    button.addEventListener('click', (e) => {
        switch (button.id) {
            case 'dot': displayValue = '.';
            addTextToDisplay();
            break;
            case 'clear':
            deleteTextFromDisplay();
            break;

    // change equals to run operate function with stored values
            
            case 'equal': 
            break;
    //
            case 'multiply': displayValue = 'x';
            addTextToDisplay();
            break;
            case 'divide': displayValue = '/';
            addTextToDisplay();
            break;
            case 'add': displayValue = '+';
            addTextToDisplay();
            break;
            case 'subtract': displayValue = '-';
            addTextToDisplay();
            break;
            case 'square': displayValue = '(^2)';
            addTextToDisplay();
            break;
        }
    })
})

// function parses displayScreen.textContent for numbers and operators

function parseDisplayScreen {
    
}

// function that calculates the inputs and outputs the answer as 'solution'

let solution;

function outputSolution() {

}