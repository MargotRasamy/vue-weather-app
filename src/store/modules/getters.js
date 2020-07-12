const getters = {
    apiKey : (state) => {return state.apiKey},
    allCityInfos : (state) => {return state.cityInfos},
    todaysWeatherInfos : (state) => {return state.todaysWeather},
    nextDaysWeatherInfos : (state) => {return state.nextDaysWeather},
    loadingAPI : (state) => {return state.loading},
    favoriteCitiesList : (state) => {return state.favoriteCitiesList},
    language : (state) => {return state.lang}
}

export default getters