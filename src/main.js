import Vue from 'vue'
import App from './App'
import Index from "./pages/index.vue"
import router from './router'
import axios from "axios"


//引入数据mock
require("./mockdata/mock.js")

Vue.prototype.$axios=axios
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<router-view></router-view>'
})
