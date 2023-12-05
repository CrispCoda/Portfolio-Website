const counterNum = document.querySelector('#title');
let curVal = 0;

const buttonDecr = document.querySelector('#decrement');
const buttonRes = document.querySelector('#reset');
const buttonIncr = document.querySelector('#increment');

buttonIncr.addEventListener('click', () => {
    curVal++;
    counterNum.textContent = curVal;
});

buttonDecr.addEventListener('click', () => {
    curVal--;
    counterNum.textContent = curVal;
});

buttonRes.addEventListener('click', () => {
    curVal = 0;
    counterNum.textContent = curVal;
});
