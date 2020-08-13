const api = {
  key: "d79e7d987356c35ab053eb9c2eb96551",
  base: 'https://api.openweathermap.org/data/2.5/'
}
const search = document.querySelector('searchbox');
search.addEventListener('keypress', searchData);
function searchData(e){
 if(e.keyCode == 13){
   getResult(search.value);
 }
}

function getResult(data){
  fetch(`${api.base}weather?q=${data}&units==metric&APPID=${api.key}`)
  .then( response => {
    return response.json();
  })
  .then( displayResult );
}
function displayResult(weather){
const city = document.querySelector('.city');
city.innerText = `${weather.name}, ${weather.sys.country}`;
}

 export default displayResult;