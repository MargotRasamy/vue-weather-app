// Time moment.js

let moment = require('moment');
// Method to convert hours
function convertHours (unixTimeStamp) {
    return moment(unixTimeStamp * 1000).format('HH:mm')
}
// Actual time
function convertDate(unixTimeStamp) {
    return moment(unixTimeStamp * 1000).format('DD/MM/YYYY')
}
// Uppercase
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
        
        if(!state.favoriteCitiesList.some((e) => e.cityName === state.cityInfos.cityName )){
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
            state.nextDaysWeather[i].time = convertHours(newUpdate[i].dt)
            state.nextDaysWeather[i].temperatureFelt = newUpdate[i].main.feels_like
            state.nextDaysWeather[i].humidity = newUpdate[i].main.humidity
            state.nextDaysWeather[i].pressure = newUpdate[i].main.pressure
            state.nextDaysWeather[i].wind = newUpdate[i].wind.speed
            state.nextDaysWeather[i].iconId = newUpdate[i].weather[0].icon
            state.nextDaysWeather[i].id = newUpdate[i].dt
        }

    },

    // When all API call repsonses are fully loaded, commit the mutation of the state "loaded"
    loadingAPICalls : (state, newUpdate) => {
        state.loaded = newUpdate
    },

    // Setting favoriteCity to true 
    updateFavoriteCitiesList : (state, newUpdate) => {
        
      
  
        // If the city was favorited (true), we add to the list
        
       if (newUpdate === true) {
            var cityFavorited = {}
            cityFavorited.cityName = state.cityInfos.cityName
            cityFavorited.favoriteCity = state.cityInfos.favoriteCity
            cityFavorited.countryCode = state.cityInfos.countryCode
            state.favoriteCitiesList.push(cityFavorited)
            state.cityInfos.favoriteCity = newUpdate
            
             
        }
        else if (state.favoriteCitiesList.some(e => e.cityName === state.cityInfos.cityName)){
            var cityUnfavorited = {}
            cityUnfavorited.cityName = state.cityInfos.cityName
            cityUnfavorited.favoriteCity = state.cityInfos.favoriteCity
            cityUnfavorited.countryCode = state.cityInfos.countryCode
            
            // state.favoriteCitiesList.forEach((element) => { element === state.cityInfos.cityName ? delete element : delete element });
            state.favoriteCitiesList = state.favoriteCitiesList.filter( (element) =>
                element.cityName !== state.cityInfos.cityName
            )
            state.cityInfos.favoriteCity = newUpdate
                
        }
    }

}

export default mutations