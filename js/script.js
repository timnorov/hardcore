const from_currencyEl = document.getElementById('from_currency'),
      from_ammountEl = document.getElementById('from_ammount'),
      to_currencyEl = document.getElementById('to_currency'),
      to_ammountEl = document.getElementById('to_ammount'),
      exchange = document.getElementById('exchange'),
      convert = document.getElementById('convert');

convert.addEventListener('click', calculate);

exchange.addEventListener('click', () => {
	const temp = from_currencyEl.value;
	from_currencyEl.value = to_currencyEl.value;
	to_currencyEl.value = temp;
	calculate();
});

function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;
	
	fetch(`https://api.exchangerate-api.com/v4/latest/${from_currency}`)
		.then(res => res.json())
		.then(res => {
		const rate = res.rates[to_currency];
		to_ammountEl.value = (from_ammountEl.value * rate).toFixed(2);
	})
}

calculate();