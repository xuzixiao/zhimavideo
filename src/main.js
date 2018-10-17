import Vue from 'vue'
import App from './App'
import Index from "./pages/index.vue"
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<router-view></router-view>'
})
