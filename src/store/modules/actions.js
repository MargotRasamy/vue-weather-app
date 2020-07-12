// Import axios for calls in actions
const axios = require('axios');


const actions = {
    // Actions for weather fetching via API
    fetchCurrentWeather({commit, state}, payload) {
        this.state.loaded = true
        
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
           .then(response => {
                if (response.status === 200){
                   commit('updateTodaysWeather', response.data)
                }
            })
            .catch((err) => {
                console.error('The city requested is not correct', err);
            });   
        
    },

    // Actions for the next days weather fetching via API
    fetchNextDaysWeather({commit, state}, payload) {
      
           axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${state.apiKey}&lang=${state.lang}`)
           .then(response => {
                if (response.status === 200){
                    commit('updateNextDaysWeather', response.data.list)
                }
            })
            .catch((err) => {
                console.error('The city requested is not correct', err)
            })
            .finally( () => {
                // Avoid the component to be rendered before API call response
                commit('loadingAPICalls', false)
            })
    },
   
    // Favorite a city to be able to see in the favorite section

    toggleFavoriteCity({commit, state}){ 

        if(!state.favoriteCitiesList.some((e) => e.cityName === state.cityInfos.cityName )){
            state.cityInfos.favoriteCity = false
        } else {
            state.cityInfos.favoriteCity = true
        }
        
        if(!state.cityInfos.favoriteCity) {
            commit('updateFavoriteCitiesList', true)
        
        }
        else {
            commit('updateFavoriteCitiesList', false)
        }
    },

    // change language, transalte
    changeLanguage({commit}, payload) {
        commit('updateLanguage', payload)
    }



}

export default actions