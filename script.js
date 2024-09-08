const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '1b78471cbf3c8727feaddd5413f29b00';
const diffKelvin = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city)
        //Llamar a la Api para que nos de la info del clima
    } else {
        alert('Ingrese una city válida');
    };
});

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
        .then(data => data.json())
        .then(data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';

    //obtengo info desde la API
    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfo = document.createElement('p');
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp - diffKelvin)} grados centígrados`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `La humedad es del ${humidity}%`;

    const icoInfo = document.createElement('img');
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `La descripción es: ${description}`;


    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfo);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(icoInfo);
    divResponseData.appendChild(descriptionInfo);





}