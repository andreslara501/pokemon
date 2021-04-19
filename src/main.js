import Vue from 'vue'
import router from './router';
import store from './store'

import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  VueClipboard,

  render: h => h(App)
}).$mount('#app')
