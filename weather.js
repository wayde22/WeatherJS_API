class Weather {
    constructor(city, country) {
    this.apiKey = 'd9343a68f602be1e063ada26afe813d5';
    this.city = city;
    this.country = country;
    }
    
    //Fetch weather from API
    async getWeather() {

        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${this.apiKey}&q=${this.city},${this.country}&units=imperial`);
        
        const data = await response.json();
        
        return {
            data: data
            // data: data.weather[0].description
        };
    }
    
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}