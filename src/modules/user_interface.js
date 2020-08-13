export function UI(){
  const nav = document.querySelector('nav');
  const input = document.createElement('input');
  nav.appendChild(input);
  input.className = 'searchbox';
  const article = document.querySelector('article');
  const city = document.createElement('h2');
  city.className = 'city';
  city.innerText = "Dareselaam";
  article.appendChild(city);
  const weather = document.createElement('div');
  weather.className = 'weather';
  article.appendChild(weather);
  weather.innerHTML= `
  <div class="weather-info">
      <h3 class="date"> Thu August 2.55pm </h3>
      
      <div class="temp"><h1>28 <span>&#xb0;C</span></h1></div>
      <div class = "status"></div>
      <div class="weather-condition">sunny</div>
      <div class = "hi-lo">29<span>&#xb0;C</span>/21<span>&#xb0;C</span></div>
      
  </div>
                      `
}