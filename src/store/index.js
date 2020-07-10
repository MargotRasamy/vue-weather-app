// Create store and combine all our modules

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './modules/state'
import getters from './modules/getters'
import actions from './modules/actions'
import mutations from './modules/mutations'


// Create the store
export default new Vuex.Store({
    modules : {
        weather : {
            state,
            getters,
            actions,
            mutations
        }
    }
});
