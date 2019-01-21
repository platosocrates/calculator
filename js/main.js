// Declares constant variables

const numberButtons = document.querySelectorAll('.numbers');

const operatorButtons = document.querySelectorAll('.highlighted');

const display = document.querySelector('#display');

const clear = document.querySelector('input[name="clear"]');


// Declares regular expressions

    // checks if there is a divided by zero regex

    const divZeroError = /\/0/;
    
    // checks if there are multiple operators in a row

    const opError = /[.*/+-][.*/+-]/;

    // checks if the first entered character is an operator

    const startError = /^[*/+-]/;

let checkForRegex = function() {
    if (divZeroError.test(display.textContent) == true) {
        alert("You can't divide by zero");
        return true;
        } else if (opError.test(display.textContent) == true) {
        alert("You can't use two operators in a row");
        return true;
        } else if (startError.test(display.textContent) == true) {
        alert("You can't start with an operator");
        return true;
        } else {
        return false;
    }
}

// trims display text if triggered by regex
const trimDisplayText = function() {
    display.textContent = display.textContent.slice(0, -1);
} 

// Declares changing variables

let storedValue;

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
            if (checkForRegex() == true) { trimDisplayText();}
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
                case "/" : display.textContent += "/"; 
                if (checkForRegex() == true) { trimDisplayText();} break;
                case "*": display.textContent += "*";
                if (checkForRegex() == true) { trimDisplayText();} break;
                case "-": display.textContent += "-";
                if (checkForRegex() == true) { trimDisplayText();} break;
                case "+": display.textContent += "+";
                if (checkForRegex() == true) { trimDisplayText();} break;
            }
        }
    });
});

