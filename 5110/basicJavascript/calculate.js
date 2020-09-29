let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let addButton = document.querySelector('#addButton');
let subButton = document.querySelector('#subButton');
let multButton = document.querySelector('#multButton');
let divButton = document.querySelector('#divButton');
let outputField = document.querySelector('#output');
let operation = document.querySelector('#operation');

function add() {
    let addition1 = Number(input1.value);
    let addition2 = Number(input2.value);
    let sum = addition1 + addition2;
    operation.value = "+";
    outputField.value = "$" + sum;
}

function subract() {
    let sub1 = Number(input1.value);
    let sub2 = Number(input2.value);
    let diff = sub1 - sub2;
    operation.value = "-";
    outputField.value = "$" + diff;
}

function multiply() {
    let mult1 = Number(input1.value);
    let mult2 = Number(input2.value);
    let product = mult1 * mult2;
    operation.value = "*";
    outputField.value = "$" + product;
}

function divide() {
    let div1 = Number(input1.value);
    let div2 = Number(input2.value);
    let quotient = div1/div2;
    operation.value = "/";
    outputField.value = "$" + quotient;
}

addButton.onclick = () => add();
subButton.onclick = () => subract();
multButton.onclick = () => multiply();
divButton.onclick = () => divide();
