// Import axios for calls in actions
const axios = require('axios');

const state = {
    // Api key from openweathermap.org
    apiKey : "5931f623ca1fae44f02bc1bf35cb9c7a",
    // City looked up informations
    cityInfos : {
        cityName : "",
        favoriteCity : false,
    },
    // Current weather
    todaysWeather : {
        date : "",
        temperature : "28 degre",
        temperatureMin :"Minimale",
        temperatureMax : "Maximale:",
        humidity : "Humidité",
        pressure : "Pression",
        wind : "Vent",
        sunrise : "Levé de soleil",
        sunset : "Couché de soleil"
    },
    // 5 upcoming days weather
    nextDaysWeather : [
        {
            date : "",
            temperature : "28 degre",
            temperatureMin :"Minimale",
            temperatureMax : "Maximale:",
            humidity : "Humidité",
            pressure : "Pression",
            wind : "Vent",
            sunrise : "Levé de soleil",
            sunset : "Couché de soleil"
        },
        {
            date : "",
            temperature : "28 degre",
            temperatureMin :"Minimale",
            temperatureMax : "Maximale:",
            humidity : "Humidité",
            pressure : "Pression",
            wind : "Vent",
            sunrise : "Levé de soleil",
            sunset : "Couché de soleil"
        },
        {
            date : "",
            temperature : "28 degre",
            temperatureMin :"Minimale",
            temperatureMax : "Maximale:",
            humidity : "Humidité",
            pressure : "Pression",
            wind : "Vent",
            sunrise : "Levé de soleil",
            sunset : "Couché de soleil"
        },
        {
            date : "",
            temperature : "28 degre",
            temperatureMin :"Minimale",
            temperatureMax : "Maximale:",
            humidity : "Humidité",
            pressure : "Pression",
            wind : "Vent",
            sunrise : "Levé de soleil",
            sunset : "Couché de soleil"
        },
        {
            date : "",
            temperature : "28 degre",
            temperatureMin :"Minimale",
            temperatureMax : "Maximale:",
            humidity : "Humidité",
            pressure : "Pression",
            wind : "Vent",
            sunrise : "Levé de soleil",
            sunset : "Couché de soleil"
        }
    ]
}

const getters = {
    apiKey : (state) => {return state.apiKey},
    allCityInfos : (state) => {return state.cityInfos},
    todaysWeatherInfos : (state) => {return state.todaysWeather},
    nextDaysWeatherInfos : (state) => {return state.nextDaysWeather}
}

const actions = {

    // Actions for weather fetching via API
    fetchCurrentWeather({state}) {
        if(state.cityInfos.cityName) {
           axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${state.cityInfos.cityName}&units=metric&appid=5931f623ca1fae44f02bc1bf35cb9c7a&lang=fr`)
            .then(response => console.log(response.data))
            .catch((err) => {
            console.error('The city requested is not correct', err);
            }); 
        }
        // If the city is not submitted, no request
        else {
            console.log('No city searched yet')
        }
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}



