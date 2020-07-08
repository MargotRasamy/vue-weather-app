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
        favoriteCity : false
    },
    
    // Favorites
    favoriteCitiesList : [
    ],
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
        sunset : "17:56",
        iconId : "03d"
    },
    // Next days weather
    nextDaysWeather : []
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
    fetchNextDaysWeather({commit, state}, payload) {
        if(state.cityInfos.cityName) {
           axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${state.apiKey}&lang=fr`)
           .then(response => {
                if (response.status === 200){
                    console.log(response.data.list)
                    commit('updateNextDaysWeather', response.data.list)
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
    // Payload will be cityinfos
    toggleFavoriteCity({commit, state}){ console.log('hey')
        if(!state.cityInfos.favoriteCity) {
            commit('updateFavoriteCitiesList', true)
           
        }
        else {
            commit('updateFavoriteCitiesList', false)
        }
    }
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
        state.todaysWeather.iconId = newUpdate.weather[0].icon
        if(!state.favoriteCitiesList.includes(state.cityInfos.cityName)){
            state.cityInfos.favoriteCity = false
        } else {
            state.cityInfos.favoriteCity = true
        }
    },
    // Next days
    updateNextDaysWeather : (state, newUpdate) => {

        state.nextDaysWeather = [...newUpdate]
        for (let i = 0; i< newUpdate.length; i++){
            state.nextDaysWeather[i] = {}
            state.nextDaysWeather[i].weatherCaption = capitalizeFirstLetter(newUpdate[i].weather[0].description)
            state.nextDaysWeather[i].temperature = newUpdate[i].main.temp
            state.nextDaysWeather[i].date = convertDate(newUpdate[i].dt)
            state.nextDaysWeather[i].temperatureMin  = newUpdate[i].main.temp_min
            state.nextDaysWeather[i].temperatureMax = newUpdate[i].main.temp_max
            state.nextDaysWeather[i].humidity = newUpdate[i].main.humidity
            state.nextDaysWeather[i].pressure = newUpdate[i].main.pressure
            state.nextDaysWeather[i].wind = newUpdate[i].wind.speed
            state.nextDaysWeather[i].iconId = newUpdate[i].weather[0].icon
        
        }
       
        console.log('Your next days', state.nextDaysWeather)

    },

    // Setting favoriteCity to true 
    updateFavoriteCitiesList : (state, newUpdate) => {
        state.cityInfos.favoriteCity = newUpdate;
        
         
        // If the city was favorited (true), we add to the list
        console.log(state.favoriteCitiesList)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}



