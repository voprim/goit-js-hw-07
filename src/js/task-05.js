const inputEl = document.querySelector('#name-input');
const outEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (e) => {
	if (e.currentTarget.value.trim() !== "") {
		outEl.textContent = e.currentTarget.value;
	} else {
		outEl.textContent = 'незнакомец';
	};
});
