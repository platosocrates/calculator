// Declares constant variables

const numberButtons = document.querySelectorAll('.numbers');
const display = document.querySelector('#display');

// Declares changing variables

let storedValue;

// Clears the display.textContent on clear click

function clearDisplay() {
    display.textContent = 0;
    storedValue = 0;
};
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