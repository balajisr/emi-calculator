"use strict"

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const months = document.getElementById('months');
const finalValue = document.getElementById('final-value');
const enterAmount = document.getElementById('enter-amount');
const enterInterest = document.getElementById('enter-interest');
const enterMonths = document.getElementById('enter-months');

let calculateEMI = () => {
    console.log('clicked');
    let amountValue = amount.value;
    let interestValue = interest.value;
    let monthsValue = months.value;

    let EMI = [amountValue * interestValue * Math.pow((1 + interestValue), monthsValue)] / [Math.pow((1 + interestValue), (monthsValue - 1))];
    enterAmount.innerHTML = amountValue;
    enterInterest.innerHTML = interestValue;
    enterMonths.innerHTML = monthsValue;
    finalValue.innerHTML = EMI;
}

amount.addEventListener('click', calculateEMI);
interest.addEventListener('click', calculateEMI);
months.addEventListener('click', calculateEMI);