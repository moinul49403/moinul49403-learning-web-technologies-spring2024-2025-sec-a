const calculator = document.createElement('div');
calculator.style.display = 'flex';
calculator.style.flexWrap = 'wrap';
calculator.style.width = '200px';
calculator.style.padding = '30px';
calculator.style.border = '30px';
calculator.style.borderRadius = '5px';
calculator.style.backgroundColor = 'cyan';
calculator.style.justifyContent = 'center';

const design = document.createElement('p');
design.innerHTML = 'CASIO';
design.style.justifyContent = 'top';
calculator.appendChild(design);



const display = document.createElement('input');
display.type = 'text';
display.style.width = '100%';
display.style.height = '40px';
display.style.fontSize = '20px';
display.style.marginBottom = '10px';
display.style.textAlign = 'right';
calculator.appendChild(display);

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = '';
}
function calculatePercentage() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) display.value = value / 100;
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
const buttons = [
    { label: '=', onClick: calculateResult },
    { label: '0', onClick: () => appendNumber('0') },    
    { label: '1', onClick: () => appendNumber('1') },    
    { label: '2', onClick: () => appendNumber('2') },    
    { label: '3', onClick: () => appendNumber('3') },
    { label: '4', onClick: () => appendNumber('4') },
    { label: '5', onClick: () => appendNumber('5') },
    { label: '6', onClick: () => appendNumber('6') },    
    { label: '7', onClick: () => appendNumber('7') },
    { label: '8', onClick: () => appendNumber('8') },
    { label: '9', onClick: () => appendNumber('9') },
    { label: '.', onClick: () => appendNumber('.') },    
    { label: '+', onClick: () => appendNumber('+') },    
    { label: '-', onClick: () => appendNumber('-') },    
    { label: '×', onClick: () => appendNumber('*') },
    { label: '÷', onClick: () => appendNumber('/') },  
    { label: 'C', onClick: clearDisplay },
    { label: '%', onClick: calculatePercentage }
];
buttons.forEach(button => {
    const btn = document.createElement('button');
    btn.textContent = button.label;
    btn.style.width = '60px';
    btn.style.height = '40px';
    btn.style.fontSize = '16px';
    btn.addEventListener('click', button.onClick);
    calculator.appendChild(btn);
});

document.body.appendChild(calculator);


