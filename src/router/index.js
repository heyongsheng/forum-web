import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/public/login/login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/public/register/register')
  }
]

const router = new VueRouter({
  routes
})

export default router
