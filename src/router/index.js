import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Signup from '../views/signup.vue'
import Product from '../components/products.vue'
import MainListing from '../views/mainProductListing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainListing
  },
    { 
    path: '/product/:title', 
    name:'product',
    component: Product, 
    props: true 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
