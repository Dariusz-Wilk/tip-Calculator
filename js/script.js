{
	const inputPriceToPay = document.getElementById('price');
	const inputNumsOfPeople = document.getElementById('people');
	const inputTipToPay = document.getElementById('tip');

	const countBtn = document.getElementById('count-btn');

	const errorMsg = document.getElementById('error');
	const priceForOne = document.getElementById('cost');
	const tipInfo = document.getElementById('tip-info');

	const countBillAndTip = function () {
		const wholeTip = (inputPriceToPay.value * inputTipToPay.value).toFixed(2);
		console.log(wholeTip);

		const priceForOneSum = (
			(+inputPriceToPay.value + +inputTipToPay.value * +inputPriceToPay.value) /
			+inputNumsOfPeople.value
		).toFixed(2);

		console.log(`suma dla 1 osoby: ${priceForOneSum}`);
		priceForOne.textContent = priceForOneSum;
		tipInfo.textContent = wholeTip;
	};

	const checkForm = function () {
		if (inputPriceToPay.value == 0 || inputNumsOfPeople.value == 0) {
			errorMsg.textContent = 'Wprowadź wszystkie dane!';
		} else {
			errorMsg.textContent = '';
			countBillAndTip();
		}
	};

	countBtn.addEventListener('click', e => {
		e.preventDefault();
		checkForm();
	});
}
