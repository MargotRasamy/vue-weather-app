const weatherIcons = (weatherCaption) => {
    
    if(weatherCaption === "01d") {
        return "wi-day-sunny";
      } else if(weatherCaption === "01n") {
        return "wi-night-clear";
      } else if(weatherCaption === "02d") {
        return "wi-day-cloudy";
      } else if(weatherCaption === "02n") {
        return "wi-night-alt-cloudy";
      } else if(weatherCaption === "03d") {
        return "wi-cloud";
      } else if(weatherCaption === "03n") {
        return "wi-cloud";
      } else if(weatherCaption === "04d") {
        return "wi-cloudy";
      } else if(weatherCaption === "04n") {
        return "wi-cloudy";
      } else if(weatherCaption === "09d") {
        return "wi-rain";
      } else if(weatherCaption === "09n") {
        return "wi-rain";
      } else if(weatherCaption === "10d") {
        return "wi-day-rain";
      } else if(weatherCaption === "10n") {
        return "wi-night-alt-rain";
      } else if(weatherCaption === "11d") {
        return "wi-thunderstorm";
      } else if(weatherCaption === "11n") {
        return "wi-thunderstorm";
      } else if(weatherCaption === "13d") {
        return "wi-snow";
      } else if(weatherCaption === "13n") {
        return "wi-snow";
      } else if(weatherCaption === "50d") {
        return "wi-fog";
      } else if(weatherCaption === "50n") {
        return "wi-fog";
      }
}
export default weatherIcons