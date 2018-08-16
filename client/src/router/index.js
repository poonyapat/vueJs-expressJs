import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Seminars from '@/components/Seminars'
import SeminarCreator from '@/components/SeminarCreator'
import ViewSeminar from '@/components/ViewSeminar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/seminars',
      name: 'seminars',
      component: Seminars
    },
    {
      path: '/seminars/create',
      name: 'SeminarCreator',
      component: SeminarCreator
    },
    {
      path: '/seminars/:seminarId',
      name: 'ViewSeminar',
      component: ViewSeminar
    }
  ]
})
