function UI() {
  const nav = document.querySelector('nav');
  const input = document.createElement('input');
  input.placeholder = 'Enter your city....';
  nav.appendChild(input);
  input.className = 'searchbox';
  const article = document.querySelector('article');
  const city = document.createElement('h2');
  city.className = 'city';
  city.innerText = '';
  article.appendChild(city);
  const weather = document.createElement('div');
  weather.className = 'weather';
  article.appendChild(weather);
  weather.innerHTML = `
  <div class="weather-info">
      <h3 class="date">  </h3>
      
      <div class="temp"><h1></h1></div>
      <div id = "status"></div>
      <div class="weather-condition"></div>
      <div class = "hi-lo"></div>
      
  </div>
                      `;
}
export default UI;