const categEl = document.querySelector('#categories');

const itemsEl = categEl.children;
console.log(`В списке ${itemsEl.length} категории.`);

for (const item of itemsEl) {
	const categEl = item.firstElementChild.textContent;
	const elAmount = item.lastElementChild.children.length;
	console.log(`Категория: ${categEl}`);
	console.log(`Количество элементов: ${elAmount}`);
}