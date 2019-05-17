"use strict"

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const months = document.getElementById('months');

let calculateEMI = () => {
    console.log('clicked');
    // let EMI = [amount.value x interest.value x Math.pow((1 + interest.value), months.value)] / [Math.pow((1 + interest.value), (months.value - 1))];
    // console.log(EMI);
}

amount.addEventListener('click', calculateEMI);
interest.addEventListener('click', calculateEMI);
months.addEventListener('click', calculateEMI);