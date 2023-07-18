{
	const priceToPay = document.getElementById('price');
	const numsOfPeople = document.getElementById('people');
	const tipToPay = document.getElementById('tip');

	const countBtn = document.getElementById('count-btn');

	const errorMsg = document.getElementById('error');
	const priceForOne = document.getElementById('cost');
	const tipInfo = document.getElementById('tip-info');

	const checkForm = function () {
		if (priceToPay.value == 0 || numsOfPeople.value == 0) {
			errorMsg.textContent = 'Wprowadź wszystkie dane!';
		} else {
			errorMsg.textContent = '';
		}
	};

	countBtn.addEventListener('click', e => {
		e.preventDefault();
		checkForm();
	});
}
