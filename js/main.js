// ==============DOM Elements ======================

const plusButton = document.getElementById('plus');
console.log(plusButton);

const minusButton = document.getElementById('minus');
console.log(minusButton);

const input = document.getElementById('input');
console.log(input);

const h2 = document.getElementById('result');
console.log(h2);

// ==================Functions ======================

let result = 0;

const add = () => {
 const selectingInput = parseInt(document.getElementById('input').value);
 result += selectingInput;
 h2.innerHTML = result;
}


const subtract = () => {
 const selectingInput = parseInt(document.getElementById('input').value);
 result -= selectingInput;
 h2.innerHTML = result;
}

// ==============Event Listeners =================

plusButton.addEventListener('click', add);
minusButton.addEventListener('click', subtract);
