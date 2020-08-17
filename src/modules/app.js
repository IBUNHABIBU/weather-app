import UI from './user_interface';

import '../css/style.css';

// import './convertion';
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
  return `${day} ${date} ${month} ${year} `;
}
function displayResult(weather) {
  const { main, description, icon } = weather.weather[0];
  // console.log(main.temp);
  const city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  const now = new Date();
  const date = document.querySelector('.date');
  date.innerText = getDateFormat(now);
  const temp = document.querySelector('h1');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span class="temp-un">&#xb0;C</span>`;

  const status = document.getElementById('status');
  status.innerHTML= `<img class="city-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon">`;
  const weatherInfo = document.querySelector('.weather-condition');
  weatherInfo.innerText = weather.weather[0].main;
  const hiLow = document.querySelector('.hi-lo');

  hiLow.innerHTML = `${weather.main.temp_min}<span class="temp-un">&#xb0;C</span>  /  ${weather.main.temp_max}<span class="temp-un">&#xb0;C</span>`;
  const toggleSwitch = document.querySelector('.units');
  toggleSwitch.innerHTML = `<input type="checkbox" id="switch"
  class="checkbox" /> 
    <label for="switch" class="toggle"> 
    <p><span class="celcious">C</span><span class="faren">F</span></p> 
    </label> `;

}
function getResult(data, unit='imperial') {
  //   const checkbox = document.getElementById('switch-div');
  // checkbox.addEventListener('click', function(e){
  //   // console.log("hello");
  // if(e.target.checked)
  // {
  //   unit= 'metric';
  //    return unit;
  // }
  // });
  //  console.log(unit);
  fetch(`${api.base}weather?q=${data}&units=${unit}&APPID=${api.key}`)
    .then(response => response.json())
    .then(displayResult);
}
function searchData(e) {
  if (e.keyCode === 13) {
    getResult(search.value);
  }
}
 search.addEventListener('keypress', searchData);
// const checkbox = document.getElementById('switch-div');

//  const checkUnits = (unit="imperial") =>
// {
  const checkbox = document.getElementById('switch-div');
  checkbox.addEventListener('click', function(e){
    
    const tempun= document.querySelectorAll('.temp-un');
  Array.from(tempun).forEach(item=> {
    if(e.target.checked)
    {
      item.innerText="u";
    } else {
      item.innerText= "R";
    }
  });
  

});
// return unit;
// }
