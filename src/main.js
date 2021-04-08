import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import { setupComponents } from './config/setup-components';
import router from './router'
import MultiFiltersPlugin from './plugins/MultiFilters'

import './styles/global.css'
import './styles/custom.css'

Vue.use(VueRouter)

Vue.use(MultiFiltersPlugin);

setupComponents(Vue);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
