// Declares constant variables

const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.highlighted');
const display = document.querySelector('#display');
const clear = document.querySelector('input[name="clear"]');

// Declares changing variables

let storedValue;

let dataArray = [];

// Clears the display.textContent on clear click

function clearDisplay() {
    display.textContent = 0;
    storedValue = 0;
};

clear.addEventListener('click', (e)=> {
    clearDisplay();
});

// On each button click adds number clicked to text content
numberButtons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        // if it's == 0 then replace display.textContent with the number 
        if (display.textContent == 0) {
            storedValue = button.value;
            display.textContent = storedValue;
        }
        // else add the number to display.textContent
        else {
            storedValue = button.value;
            display.textContent += storedValue;
        }
    });
});

// On button click adds operator to display.textContent
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', (e)=> {
        // if operator is equals, then operate on the string
        if (operator.value == "=") {
            display.textContent = eval(display.textContent);
        }
        else {
            switch (operator.value) {
                case "/": display.textContent += "/"; break;
                case "*": display.textContent += "*"; break;
                case "-": display.textContent += "-"; break;
                case "+": display.textContent += "+"; break;
            }
        }
    });
});

