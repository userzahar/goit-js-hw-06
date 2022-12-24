let counterValue = 0;
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const accumulatorValue = document.getElementById("value");

buttonDecrement.addEventListener('click', onClickMinusValue);
buttonIncrement.addEventListener('click', onClickPlusValue);

function onClickMinusValue(event) {
    counterValue -= 1;
    accumulatorValue.textContent = counterValue;
};
function onClickPlusValue(event) {
    counterValue += 1;
    accumulatorValue.textContent = counterValue;
};







