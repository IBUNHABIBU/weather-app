import { UI } from './user_interface';
import '../css/style.css'
UI();
const api = {
  key: "d79e7d987356c35ab053eb9c2eb96551",
  base: 'https://api.openweathermap.org/data/2.5/'
}
const search = document.querySelector('.searchbox');
search.addEventListener('keypress', searchData);
function searchData(e){
 if(e.keyCode == 13){
   getResult(search.value);
 }
}

function getResult(data){
  fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
  .then( response => {
    return response.json();
  })
  .then( displayResult );
}
function displayResult(weather){
const city = document.querySelector('.city');
city.innerText = `${weather.name}, ${weather.sys.country}`;
let now = new Date();
let date = document.querySelector('.date');
date.innerText = getDateFormat(now);
const temp = document.querySelector('h1');
temp.innerHTML = `${Math.round(weather.main.temp)}<span>&#xb0;C</span>`;
const weatherInfo = document.querySelector('.weather-condition');
weatherInfo.innerText = weather.weather[0].main;
const hiLow = document.querySelector('.hi-lo');
hiLow.innerHTML = `${weather.main.temp_min}<span>&#xb0;C</span>  /  ${weather.main.temp_max}<span>&#xb0;C</span>`;
}
function getDateFormat(d){
  const months =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();
  let time = d.getTime();
  return `${day} ${date} ${month} ${year} `
}
if(module && module.hot) module.hot.accept;