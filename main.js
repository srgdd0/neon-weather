const name = document.querySelector("#name");
const temperature = document.querySelector(".temperature");
const temperatureMax = document.querySelector("#max");
const temperatureMin = document.querySelector("#min");
const feelsLike = document.querySelector("#feels_like");
const weatherDescription = document.querySelector(".weather-description");
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#Humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

const data = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=kokkola&units=metric&&appid=89b796e5dba23e291bbea89229545a11`
)
  .then((res) => res.json())
  .catch((err) => console.log(`error: ${err}`));

console.log(data);
name.innerHTML = data.name;
temperature.innerHTML = Math.round(data.main.temp) + "°C";
feelsLike.innerHTML += Math.round(data.main.feels_like) + "°C";
weatherDescription.innerHTML = data.weather[0]["description"];
windSpeed.innerHTML += Math.round(data.wind.speed) + "m/s";
humidity.innerHTML += data.main.humidity + "%";
temperatureMax.innerHTML += Math.round(data.main.temp_max) + "°C";
temperatureMin.innerHTML += Math.round(data.main.temp_min) + "°C";
sunrise.innerHTML += new Date(data.sys.sunrise * 1000).toLocaleTimeString();
sunset.innerHTML += new Date(data.sys.sunset * 1000).toLocaleTimeString();
