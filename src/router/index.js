import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Discover from '@/components/Discover'
import Center from '@/components/Center'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'search',
    component: Search
  }, {
    path: '/search',
    redirect: '/'
  }, {
    path: '/discover',
    name: 'discover',
    component: Discover
  }, {
    path: '/center',
    name: 'center',
    component: Center
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }]
})
