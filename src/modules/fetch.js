import convert from './converter';

function getDateFormat(d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const date = d.getDate();
  return `${day} ${date} ${month} ${year} `;
}
function showStatus(id) {
  const body = document.querySelector('body');
  if (id < 250) {
    body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMG9JHGdS4zRQv52KmD4ksyCJXr94fntqXPw&usqp=CAU')";
  } else if (id < 350) {
    body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_X867sS9EZZCpMVPRQi5iUtlL_ewOHw2_DA&usqp=CAU')";
  } else if (id < 550) {
    body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvXpK4Xn_zxM3hohO8iwkfNBE0eIJHmur3ng&usqp=CAU')";
  } else if (id < 650) {
  body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgayey8CnkbGSqNG_iIBTjdPbNuqmNyodOKA&usqp=CAU')";
  } else if (id < 800) {
    body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
  } else if (id === 800) {
    body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
  } else if (id > 800) {
    body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
  }
}
function changeUnit(temp, weather, hiLow){
  const checkbox = document.getElementById('switch-div');
  checkbox.addEventListener('click', (e) => {
    if (e.target.checked) {
      temp.innerHTML = `${convert(Math.round(weather.main.temp))}<span class="temp-un">&#xb0;F</span>`;
      hiLow.innerHTML = `${convert(weather.main.temp_min)}<span class="temp-un">&#xb0;F</span>  /  ${convert(weather.main.temp_max)}<span class="temp-un">&#xb0;F</span>`;
    } else {
      temp.innerHTML = `${Math.round(weather.main.temp)}<span class="temp-un">&#xb0;C</span>`;
      const hiLow = document.querySelector('.hi-lo');
      hiLow.innerHTML = `${weather.main.temp_min}<span class="temp-un">&#xb0;C</span>  /  ${weather.main.temp_max}<span class="temp-un">&#xb0;C</span>`;
    }
  });
}
function displayResult(weather) {
  const { id, icon } = weather.weather[0];
  showStatus(id);
  const city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  const now = new Date();
  const date = document.querySelector('.date');
  date.innerText = getDateFormat(now);
  const temp = document.querySelector('h1');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span class="temp-un">&#xb0;C</span>`;
  const hiLow = document.querySelector('.hi-lo');
  hiLow.innerHTML = `${weather.main.temp_min}<span class="temp-un">&#xb0;C</span>  /  ${weather.main.temp_max}<span class="temp-un">&#xb0;C</span>`;
  const status = document.getElementById('status');
  status.innerHTML = `<img class="city-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;
  const weatherInfo = document.querySelector('.weather-condition');
  weatherInfo.innerText = weather.weather[0].main;
  const toggleSwitch = document.querySelector('.units');
  changeUnit(temp, weather, hiLow);
  toggleSwitch.innerHTML = `<input type="checkbox" id="switch"
  class="checkbox" /> 
    <label for="switch" class="toggle"> 
    <p><span class="celcious">C</span><span class="faren">F</span></p> 
    </label> `;
}
export default displayResult;