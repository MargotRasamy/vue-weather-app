// Create store and combine all our modules

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Import our modules
import weather from './modules/weather'

// Create the store
export default new Vuex.Store({
    modules : {
        weather
    }
});
