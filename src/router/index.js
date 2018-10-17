import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index.vue"
import list from "@/pages/list.vue"
import detail from "@/pages/detail.vue"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component:index
    },{
      path: '/list/:id',
      name: 'list',
      component:list
    },{
      path: '/detail/:id',
      name: 'detail',
      component:detail
    }
  ]
})
