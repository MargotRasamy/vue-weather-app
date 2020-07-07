// Import axios for calls in actions
const axios = require('axios');

const state = {
    // Api key from openweathermap.org
    apiKey : "5931f623ca1fae44f02bc1bf35cb9c7a",
    // City looked up informations
    cityInfos : {
        cityName : "Paris",
        favoriteCity : false,
    },
    // Current weather
    todaysWeather : {
        date : "06/09/2020",
        weatherCaption : "Ciel éclairé",
        temperature : "28",
        temperatureMin :"15",
        temperatureMax : "31",
        humidity : "78",
        pressure : "1016",
        wind : "12",
        sunrise : "06:18",
        sunset : "17:56"
    },
    // 5 upcoming days weather
    nextDaysWeather : [
        {
            date : "06/09/2020",
            weatherCaption : "Ciel éclairé",
            temperature : "28",
            temperatureMin :"15",
            temperatureMax : "31",
            humidity : "78",
            pressure : "1016",
            wind : "12",
            sunrise : "06:18",
            sunset : "17:56"
        },
        {
            date : "06/09/2020",
            weatherCaption : "Ciel éclairé",
            temperature : "28",
            temperatureMin :"15",
            temperatureMax : "31",
            humidity : "78",
            pressure : "1016",
            wind : "12",
            sunrise : "06:18",
            sunset : "17:56"
        },
        {
            date : "06/09/2020",
            weatherCaption : "Ciel éclairé",
            temperature : "28",
            temperatureMin :"15",
            temperatureMax : "31",
            humidity : "78",
            pressure : "1016",
            wind : "12",
            sunrise : "06:18",
            sunset : "17:56"
        },
        {
            date : "06/09/2020",
            weatherCaption : "Ciel éclairé",
            temperature : "28",
            temperatureMin :"15",
            temperatureMax : "31",
            humidity : "78",
            pressure : "1016",
            wind : "12",
            sunrise : "06:18",
            sunset : "17:56"
        },
        {
            date : "06/09/2020",
            weatherCaption : "Ciel éclairé",
            temperature : "28",
            temperatureMin :"15",
            temperatureMax : "31",
            humidity : "78",
            pressure : "1016",
            wind : "12",
            sunrise : "06:18",
            sunset : "17:56"
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
    fetchCurrentWeather({commit, state}, payload) {
        if(state.cityInfos.cityName !== "") {
           axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=5931f623ca1fae44f02bc1bf35cb9c7a&lang=fr`)
           .then(response => {
                if (response.status === 200){
                   console.log(response.data) 
                   commit('updateTodaysWeather', response.data)
                }
            })
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

    // Setting the datas in the state so we can commit the actions
    updateTodaysWeather : (state, newUpdate) => {
        state.cityInfos.cityName = newUpdate.name
        state.todaysWeather.weatherCaption  = newUpdate.weather.description
        state.todaysWeather.temperature = newUpdate.main.temp
        state.todaysWeather.temperatureMin  = newUpdate.main.temp_min
        state.todaysWeather.temperatureMax = newUpdate.main.temp_max
        state.todaysWeather.humidity = newUpdate.main.humidity
        state.todaysWeather.pressure = newUpdate.main.pressure
        state.todaysWeather.wind = newUpdate.wind.speed
        state.todaysWeather.sunrise = newUpdate.sys.sunrise
        state.todaysWeather.sunset = newUpdate.sys.sunset
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}



