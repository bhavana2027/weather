async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "cc2c3ef16d73f2ecf2c00fc0b13713af"; // Replace with your OpenWeather API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        const response = await fetch(url);
        const data = await response.json();


        if (data.cod === "404") {
            document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
            return;
        }


        document.getElementById('weatherResult').innerHTML = `
<h3>${data.name}, ${data.sys.country}</h3>
<p>🌡 Temperature: ${data.main.temp}°C</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>🌥 Condition: ${data.weather[0].description}</p>
`;
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
    }
}