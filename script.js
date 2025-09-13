const apiKey = "YOUR_API_KEY"; // paste your OpenWeatherMap key here

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name 🌍");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    document.getElementById("weather").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weather").innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
