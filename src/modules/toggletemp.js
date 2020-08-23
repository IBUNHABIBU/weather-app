function toggle(){
  
  const temp = document.querySelector('h1');
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
export default toggle;
