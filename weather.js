/**
 * Обновляет информацию о погоде в Минске.
 */
 function updateWeather() {
    const apiKey = 'c59824b56f5db34d02d956aa43a5c7a4';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${apiKey}&units=metric`;

    try {
        fetch(weatherUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при получении данных о погоде');
                }
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const weatherInfo = document.getElementById('weather-info');
                weatherInfo.innerHTML = `<i class="fas fa-thermometer-half"></i> Температура: ${temp} °C<br>Описание: ${description}`;
            })
            
    } catch (error) {
        console.error('Ошибка:', error);
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<i class="fas fa-thermometer-half"></i> Ошибка при получении данных о погоде`;
    }
}

document.addEventListener("DOMContentLoaded", updateWeather);
