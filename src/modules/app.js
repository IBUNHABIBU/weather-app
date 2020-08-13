import { UI } from './user_interface';

import '../css/style.css';

UI();
const api = {
  key: 'd79e7d987356c35ab053eb9c2eb96551',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const search = document.querySelector('.searchbox');

function getDateFormat(d) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const date = d.getDate();
  const time = d.getTime();
  return `${day} ${date} ${month} ${year} `
}
function displayResult(weather) {
  const city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  const now = new Date();
  const date = document.querySelector('.date');
  date.innerText = getDateFormat(now);
  const temp = document.querySelector('h1');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>&#xb0;C</span>`;
  const weatherInfo = document.querySelector('.weather-condition');
  weatherInfo.innerText = weather.weather[0].main;
  const hiLow = document.querySelector('.hi-lo');
  hiLow.innerHTML = `${weather.main.temp_min}<span>&#xb0;C</span>  /  ${weather.main.temp_max}<span>&#xb0;C</span>`;
}
function getResult(data) {
  fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    .then( response => {
      return response.json();
    })
    .then( displayResult );
}
function searchData(e) {
  if (e.keyCode === 13) {
    getResult(search.value);
  }
}
search.addEventListener('keypress', searchData);

if(module && module.hot) module.hot.accept;