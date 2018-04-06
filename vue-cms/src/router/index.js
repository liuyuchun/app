import Vue from 'vue'
import Router from 'vue-router'
import home from  '../components/Home'
import list from '../components/list'
import collect from '../components/Collect'
import my from '../components/My'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/list',component:list},
    {path:'/collect',component:collect},
    {path:'/my',component:my},
  ]
})
