"use strict"

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const months = document.getElementById('months');
const finalValue = document.getElementById('final-value');
const enterAmount = document.getElementById('enter-amount');
const enterInterest = document.getElementById('enter-interest');
const enterMonths = document.getElementById('enter-months');

function localeString(x, sep, grp) {
    var sx = ('' + x).split('.'),
        s = '',
        i, j;
    sep || (sep = ','); // default seperator
    grp || grp === 0 || (grp = 3); // default grouping
    i = sx[0].length;
    while (i > grp) {
        j = i - grp;
        s = sep + sx[0].slice(j, i) + s;
        i = j;
    }
    s = sx[0].slice(0, i) + s;
    sx[0] = s;
    return sx.join('.');
}

let calculateEMI = () => {
    console.log('clicked');
    let amountValue = amount.value;
    let monthsValue = months.value;
    let interestValue = interest.value;
    let interestRate = interestValue * (monthsValue / 100);

    let EMI = [amountValue * interestRate * Math.pow((1 + interestRate), monthsValue)] / [Math.pow((1 + interestRate), (monthsValue - 1))];
    enterAmount.innerHTML = localeString(amountValue);
    enterInterest.innerHTML = interestValue;
    enterMonths.innerHTML = monthsValue;
    finalValue.innerHTML = localeString(EMI.toFixed(2));
}

amount.addEventListener('click', calculateEMI);
interest.addEventListener('click', calculateEMI);
months.addEventListener('click', calculateEMI);
amount.addEventListener('change', calculateEMI);
interest.addEventListener('change', calculateEMI);
months.addEventListener('change', calculateEMI);