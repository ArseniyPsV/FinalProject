/**
 * Обновляет информацию о курсе доллара к белорусскому рублю.
 * @function updateExchangeRate
 */
 function updateExchangeRate() {
    const currencyCode = 'USD';
    const paramMode = 2;
    const exchangeUrl = `https://api.nbrb.by/exrates/rates/${currencyCode}?parammode=${paramMode}`;

    try {
        fetch(exchangeUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных о курсе валют');
                }
                return response.json();
            })
            .then(data => {
                const rate = data.Cur_OfficialRate.toFixed(2);
                document.querySelector(".exchange-rate").innerHTML = `<i class="fas fa-dollar-sign"></i> Курс доллара: 1 USD = ${rate} BYN`;
            })
            .catch(error => {
                console.error('Ошибка:', error);
                document.querySelector(".exchange-rate").innerHTML = `<i class="fas fa-dollar-sign"></i> Ошибка при получении данных о курсе валют`;
            });
    } catch (error) {
        console.error('Ошибка:', error);
        document.querySelector(".exchange-rate").innerHTML = `<i class="fas fa-dollar-sign"></i> Ошибка при получении данных о курсе валют`;
    }
}

document.addEventListener("DOMContentLoaded", updateExchangeRate);
