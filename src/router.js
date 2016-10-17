import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Components
import Home from './views/Home'
import Chat from './views/Chat'
import Api from './views/Api'

const routes = [
  { path: '/', component: Home },
  { path: '/chat', component: Chat },
  { path: '/api', component: Api }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
