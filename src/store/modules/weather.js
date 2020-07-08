// Import axios for calls in actions
const axios = require('axios');
// function onlyUnique(value, index, self) { 
//     return self.indexOf(value) === index;
// }


const state = {
    // Api key from openweathermap.org
    apiKey : "5931f623ca1fae44f02bc1bf35cb9c7a",
    // City looked up informations
    cityInfos : {
        cityName : "Paris",
        countryCode : "FR",
        favoriteCity : false,
        favoriteCitiesList : []
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
    }
}

const getters = {
    apiKey : (state) => {return state.apiKey},
    allCityInfos : (state) => {return state.cityInfos},
    todaysWeatherInfos : (state) => {return state.todaysWeather},
    nextDaysWeatherInfos : (state) => {return state.nextDaysWeather}
}
// Time moment.js

let moment = require('moment');
// Method to convert hours
function convertHours (unixTimeStamp) {
    return moment(unixTimeStamp * 1000).format('h:mm')
}
// Actual time
// moment.locale();
// const nowTime = moment().format('LTS')
function convertDate(unixTimeStamp) {
    return moment(unixTimeStamp * 1000).format('DD/MM/YYYY')
}
// Uppercase
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const actions = {

    // Actions for weather fetching via API
    fetchCurrentWeather({commit, state}, payload) {
        if(state.cityInfos.cityName !== "") {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${state.apiKey}&lang=fr`)
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
    },

    // Actions for the next days weather fetching via API
    fetchNextDaysWeather({state}, payload) {
        if(state.cityInfos.cityName) {
           axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${state.apiKey}&lang=fr`)
           .then(response => {
                if (response.status === 200){
                    console.log(response.data.list)
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
    },

    // Favorite a city to be able to see in the favorite section
    // favoriteACity({state}, payload){
    //     commit updateFavoriteCity
    // }
}



const mutations = {

    // Setting the datas in the state so we can commit the actions
    updateTodaysWeather : (state, newUpdate) => {
        state.cityInfos.cityName = newUpdate.name
        state.cityInfos.countryCode = newUpdate.sys.country
        state.todaysWeather.weatherCaption  = capitalizeFirstLetter(newUpdate.weather[0].description)
        state.todaysWeather.temperature = newUpdate.main.temp
        state.todaysWeather.date = convertDate(newUpdate.dt)
        state.todaysWeather.temperatureMin  = newUpdate.main.temp_min
        state.todaysWeather.temperatureMax = newUpdate.main.temp_max
        state.todaysWeather.humidity = newUpdate.main.humidity
        state.todaysWeather.pressure = newUpdate.main.pressure
        state.todaysWeather.wind = newUpdate.wind.speed
        state.todaysWeather.sunrise = convertHours(newUpdate.sys.sunrise)
        state.todaysWeather.sunset = convertHours(newUpdate.sys.sunset)
    },

    // Setting favoriteCity to true 
    // updateFavoriteCity : (state, newUpdate) => {
    //     state.cityInfos.favoriteCity = newUpdate
    //     state.cityInfos.favoriteCitiesList = state.cityInfos.favoriteCitiesList.push(state.cityInfos.cityName) 
    // }

}

export default {
    state,
    getters,
    actions,
    mutations
}



