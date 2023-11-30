let symbols = ['SM', 'MRC', 'C', '←', 'M+', 'M-', 'MS', 'MR', '1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/', '**', 'CM'];
let container = document.querySelector('.buttons');

symbols.map((value, index) => {
    let but = document.createElement('button');
    but.textContent = value;
    container.appendChild(but);
    but.addEventListener('click', () => {
        switch (value) {
            case 'C': clearScreen();
                break;
            case '←': backspace();
                break;
            case '**': stepen();
                break;
            case '=': calculate();
                break;

            case 'MS': memoryStore();
                break;

            case 'MR': memoryRecall();
                break;

            case 'M+': memoryAdd();
                break;

            case 'M-': memorySubtract();
                break;

            case 'MRC': memoryReadClear();
                break;
            case 'SM': secondMemoryStore();
                break;
            case 'CM': secondMemoryCal();
                break
            default: appendToDisplay(value);
        }
    })
})



let display = document.getElementById('display');
let memory = 0;
let secondMemory = 0;

function appendToDisplay(value) {
    display.value += value;
}
function clearScreen() {
    display.value = '';
}

function stepen() {
    display.value = Math.pow(display.value, 2)
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    display.value = memory;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    display.value = memory;
}

function memoryReadClear() {
    display.value = memory;
    memory = 0;
}
function secondMemoryStore() {
    secondMemory = parseFloat(display.value) || 0;
    console.log(secondMemory)
}

function secondMemoryCal() {
    display.value = Math.pow(secondMemory + parseFloat(display.value), 2)
}