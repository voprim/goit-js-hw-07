const counter = document.querySelector('#value');

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const onClickIncrement = (e) => {
	counterValue += 1;
	counter.textContent = counterValue;
}
incrementEl.addEventListener('click', onClickIncrement)

const onClickDecrement = (e) => {
	counterValue -= 1;
	counter.textContent=counterValue;
}
decrementEl.addEventListener('click', onClickDecrement)

