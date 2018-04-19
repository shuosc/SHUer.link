import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Discover from '@/components/Discover'
import About from '@/components/About'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      props: (route) => ({
        query: route.query.src
      })
    },
    {
      path: '/discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
