const state = {
    // Api key from openweathermap.org
    apiKey : "5931f623ca1fae44f02bc1bf35cb9c7a",
    // City looked up informations
    cityInfos : {
        cityName : "",
        countryCode : "",
        favoriteCity : false
    },
    // Favorites
    favoriteCitiesList : [],
    // Current weather
    todaysWeather : {
        date : "",
        weatherCaption : "",
        temperature : "",
        temperatureMin :"",
        temperatureMax : "",
        humidity : "",
        pressure : "",
        wind : "",
        sunrise : "",
        sunset : "",
        iconId : ""
    },
    // Next days weather
    nextDaysWeather : [
    ],
    // API call responses fully loaded
    // If loading = true, do not render the components yet
    loading : true,
    lang : "fr"
}

export default state