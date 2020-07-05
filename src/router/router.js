import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from '../views/Dashboard.vue'
import NextDays from '../views/NextDays.vue'
import Favorites from '../views/Favorites.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path : '/',
          component: Dashboard
        },
        { path : '/nextdays',
          component: NextDays
        },
        { path : '/favorites',
          component: Favorites
        }
    ]
  })

export default router;