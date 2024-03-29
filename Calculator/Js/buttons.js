const calculatorNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", ".", "9", '='] // Numbers

let numbers = document.getElementById('numbers');

calculatorNumbers.forEach((number) => {
    let newNum = document.createElement('div');
    newNum.classList.add('number');
    newNum.classList.add('keyboard-div');

    newNum.innerHTML = '<p type="button" id ="shit-in-div">' +number+ "</p>";

    numbers.appendChild(newNum);
})

const calculatorSign = [  "+", "-", "*", "/", "Ans"] // Basic Operators

let signs = document.getElementById('signs');

calculatorSign.forEach((sign) => {
    let newSign = document.createElement('div');
    newSign.classList.add('sign')
    newSign.classList.add('keyboard-div')

    newSign.innerHTML = '<button id = "shit-in-div">'+sign + '</button';

    signs.appendChild(newSign)
})