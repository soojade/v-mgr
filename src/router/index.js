import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    // name: 'home',
    component: () => import(/* webpackChunkName:"home" */'../components/home')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})

export default router
