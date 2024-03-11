const sendBtn = document.querySelector("#send");
const changeCity = document.querySelector("#changeCity");
const widgetsArea = document.querySelector("main");
const searchArea = document.querySelector("#search");

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
const cordsLat = document.querySelector("#lat");
const cordsLon = document.querySelector("#lon");
const countryCode = document.querySelector("#countryCode");
const pressure = document.querySelector("#pressure");
const timezone = document.querySelector("#timezone");
const cod = document.querySelector("#cod");
const id = document.querySelector("#id");

changeCity.addEventListener("click", () => {
  const valueBtn = document.querySelector("#enterCity");

  widgetsArea.style.display = "none";
  searchArea.style.display = "block";
  changeCity.style.display = "none";

  name.innerHTML = "";
  temperature.innerHTML = "";
  feelsLike.innerHTML = "";
  weatherDescription.innerHTML = "";
  windSpeed.innerHTML = "";
  humidity.innerHTML = "";
  temperatureMax.innerHTML = "";
  temperatureMin.innerHTML = "";
  sunrise.innerHTML = "";
  sunset.innerHTML = "";
  cordsLat.innerHTML = "";
  cordsLon.innerHTML = "";
  countryCode.innerHTML = "";
  pressure.innerHTML = "";
  timezone.innerHTML = "";
  cod.innerHTML = "";
  id.innerHTML = "";
});

sendBtn.addEventListener("click", async () => {
  const value = document.querySelector("#enterCity").value;

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&&appid=89b796e5dba23e291bbea89229545a11`
  )
    .then((res) => res.json())
    .catch((err) => console.log(`error: ${err}`));

  console.log(data);

  name.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°C";
  feelsLike.innerHTML =
    "feels like: " + Math.round(data.main.feels_like) + "°C";
  weatherDescription.innerHTML = data.weather[0]["description"];
  windSpeed.innerHTML = "Wind: " + Math.round(data.wind.speed) + "m/s";
  humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
  temperatureMax.innerHTML = "Max: " + Math.round(data.main.temp_max) + "°C";
  temperatureMin.innerHTML = "Min: " + Math.round(data.main.temp_min) + "°C";
  sunrise.innerHTML =
    "sunrise: " + new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  sunset.innerHTML =
    "sunset: " + new Date(data.sys.sunset * 1000).toLocaleTimeString();
  cordsLat.innerHTML = data.coord.lat;
  cordsLon.innerHTML = data.coord.lon;
  countryCode.innerHTML = data.sys.country;
  pressure.innerHTML = data.main.pressure;

  let timezoneOffsetHours = data.timezone / 3600;
  let sign = timezoneOffsetHours >= 0 ? "+" : "-";
  let hours = Math.abs(Math.floor(timezoneOffsetHours));
  let minutes = Math.abs(Math.floor((timezoneOffsetHours - hours) * 60));
  let timezoneString = sign + hours + " hours " + minutes + " minutes";
  timezone.innerHTML = timezoneString;

  cod.innerHTML = data.cod;
  id.innerHTML = data.id;

  searchArea.style.display = "none";
  widgetsArea.style.display = "block";
  changeCity.style.display = "block";
});
