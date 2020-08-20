import UI from './user_interface';

import '../css/style.css';

import displayResult from './fetch';


UI();
const api = {
  key: 'd79e7d987356c35ab053eb9c2eb96551',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const search = document.querySelector('.searchbox');

search.addEventListener('keypress', searchData);

function getResult(data) {
  fetch(`${api.base}weather?q=${data}&units=metric&APPID=${api.key}`)
    .then(response => response.json())
    .then(displayResult);
}
function searchData(e) {
  if (e.keyCode === 13) {
    getResult(search.value);
  }
}
// searchData();
