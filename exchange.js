const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const apiKey=""
const apiUrl="https://api.api-ninjas.com/v1/exchangerate?pair=GBP_"

convert.addEventListener('click', () => {
    const amountTotal = amount.value;
    const currencyTotal = currency.value;
    const url = apiUrl + currencyTotal;

    fetch(url, {
        headers: {
            'X-API-KEY': apiKey
        }
    })
    .then(response => response.json()) // Use parentheses instead of curly braces
    .then(data => {
        const rate = data.rate;
        const resultAmount = amountTotal * rate;
        result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultAmount.toFixed(2)} USD`; // Use backticks for template literals
    })
    .catch(error => {
        console.error('Request Failed', error); // Use parentheses for console.error
        result.innerHTML = 'An error occurred, please try again'; // Fix typo in error message
    });
})