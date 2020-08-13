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
  div.className = 'weather';
  article.appendChild(weather);
  weather.innerHTML= `
  <div class="weather-info">
      <h3 class="date"> 
  </div>
                      `
}