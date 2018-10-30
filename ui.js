class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.min = document.getElementById('w-feel-like');
        this.wind = document.getElementById('w-dewpoint');
        this.max = document.getElementById('w-wind');
        this.flag = document.getElementById('w-flag');
    }

    paint(info) {
        this.location.textContent = `${info.data.name}, ${info.data.sys.country}`;
        this.desc.textContent = info.data.weather[0].description;
        this.string.textContent = `${info.data.main.temp}° F`;
        this.flag.setAttribute('src', `http://openweathermap.org/images/flags/${info.data.sys.country.toLowerCase()}.png`);
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${info.data.weather[0].icon}.png`);
        this.details.textContent = `Relative Humidity: ${info.data.main.humidity}%`;
        this.min.textContent = `Min Temp: ${info.data.main.temp_min}° F`;
        this.max.textContent = `Max Temp: ${info.data.main.temp_max}° F`;
        this.wind.textContent = `Wind Speed: ${info.data.wind.speed} MPH`;
        
    }
}