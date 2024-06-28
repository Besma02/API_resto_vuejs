import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/Add.vue'
import Update from '../views/Update.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'SignUp',
      component:SignUp
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/add',
      name: 'add',
      component:Add
    },
    {
      path: '/update/:id',
      name: 'update',
      component:Update
    }
  ]
})

export default router
