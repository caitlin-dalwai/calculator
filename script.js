let display = document.querySelector('.display');


function addChar(char){
    display.textContent += char
}

function calculate(){
    let calculation = eval(display.textContent);
    display.textContent = calculation;
}
function allClear(){
    display.textContent = '';
}