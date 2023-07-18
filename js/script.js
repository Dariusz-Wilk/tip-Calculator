{
	const inputPriceToPay = document.getElementById('price');
	const inputNumsOfPeople = document.getElementById('people');
	const inputTipToPay = document.getElementById('tip');

	const countBtn = document.getElementById('count-btn');

	const priceForOne = document.getElementById('cost');
	const tipInfo = document.getElementById('tip-info');

	const errorMsg = document.getElementById('error');
	const textInfo = document.querySelector('.text-info');
	const tipMsg = document.querySelector('.tip-info');

	const countBillAndTip = function () {
		const wholeTip = (inputPriceToPay.value * inputTipToPay.value).toFixed(2);

		const priceInputNum = +inputPriceToPay.value;
		const tipInputNum = +inputTipToPay.value;
		const peopleInputNum = parseInt(inputNumsOfPeople.value);

		const priceForOneSum = (
			(priceInputNum + tipInputNum * priceInputNum) /
			peopleInputNum
		).toFixed(2);

		priceForOne.textContent = priceForOneSum;
		tipInfo.textContent = wholeTip;

		textInfo.classList.add('show');
		tipMsg.classList.add('show');
	};

	const clearForm = function () {
		inputPriceToPay.value = '';
		inputNumsOfPeople.value = '';
		inputTipToPay.selectedIndex = 0;
	};

	const checkForm = function () {
		if (inputPriceToPay.value == 0 || inputNumsOfPeople.value == 0) {
			errorMsg.textContent = 'Wprowadź wszystkie dane!';
			textInfo.classList.remove('show');
			tipMsg.classList.remove('show');
		} else {
			errorMsg.textContent = '';
			countBillAndTip();
			clearForm();
		}
	};

	countBtn.addEventListener('click', e => {
		e.preventDefault();
		checkForm();
	});
}
